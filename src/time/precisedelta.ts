import { resolveLocale } from '../defaults.js'
import { getLocale } from '../i18n/registry.js'
import type { LocaleId, TimeWords, UnitWords } from '../i18n/types.js'
import { DAY, HOUR, MINUTE, MONTH, SECOND, WEEK, YEAR, toMilliseconds } from './duration.js'
import type { Delta } from './duration.js'

export type PrecisedeltaUnit =
  | 'year'
  | 'month'
  | 'week'
  | 'day'
  | 'hour'
  | 'minute'
  | 'second'
  | 'millisecond'
  | 'microsecond'

export interface PrecisedeltaOptions {
  locale?: LocaleId
  minimumUnit?: PrecisedeltaUnit
  suppress?: readonly PrecisedeltaUnit[]
  format?: (value: number) => string
}

const UNIT_ORDER: readonly PrecisedeltaUnit[] = [
  'year',
  'month',
  'week',
  'day',
  'hour',
  'minute',
  'second',
  'millisecond',
  'microsecond',
]

const UNIT_MS: Record<PrecisedeltaUnit, number> = {
  year: YEAR,
  month: MONTH,
  week: WEEK,
  day: DAY,
  hour: HOUR,
  minute: MINUTE,
  second: SECOND,
  millisecond: 1,
  microsecond: 0.001,
}

export function precisedelta(delta: Delta, opts: PrecisedeltaOptions = {}): string {
  const locale = resolveLocale(opts.locale)
  const time = getLocale(locale).time
  const minimumUnit = opts.minimumUnit ?? 'second'
  const suppress = new Set(opts.suppress ?? ['week'])

  const minIdx = UNIT_ORDER.indexOf(minimumUnit)
  const activeUnits = UNIT_ORDER.slice(0, minIdx + 1).filter((u) => !suppress.has(u))
  if (activeUnits.length === 0) activeUnits.push(minimumUnit)

  let remaining = Math.abs(toMilliseconds(delta))

  type Part = { unit: PrecisedeltaUnit; value: number }
  const parts: Part[] = []
  for (let i = 0; i < activeUnits.length; i++) {
    const unit = activeUnits[i]!
    const unitMs = UNIT_MS[unit]
    const isLast = i === activeUnits.length - 1
    if (isLast) {
      parts.push({ unit, value: remaining / unitMs })
    } else {
      const whole = Math.floor(remaining / unitMs)
      remaining -= whole * unitMs
      parts.push({ unit, value: whole })
    }
  }

  const filtered = parts.filter((part) => part.value !== 0)
  if (filtered.length === 0) filtered.push(parts[parts.length - 1]!)
  parts.length = 0
  parts.push(...filtered)

  const pluralRules = new Intl.PluralRules(locale)
  const integerFormatter = new Intl.NumberFormat(locale, { maximumFractionDigits: 0 })
  const lastFormatter = opts.format ?? defaultFractionalFormat(locale)

  const rendered = parts.map((part, i) => {
    const words = unitWords(time, part.unit)
    const isLast = i === parts.length - 1
    const useLastFormat = isLast && !Number.isInteger(part.value)
    const formatted = useLastFormat
      ? lastFormatter(part.value)
      : integerFormatter.format(part.value)
    const category = pluralRules.select(part.value)
    const noun = category === 'one' ? words.one : words.plural
    return `${formatted} ${noun}`
  })

  return joinList(rendered, time.separator, time.connector)
}

function unitWords(time: TimeWords, unit: PrecisedeltaUnit): UnitWords {
  return time[unit]
}

function defaultFractionalFormat(locale: LocaleId): (value: number) => string {
  const formatter = new Intl.NumberFormat(locale, { maximumFractionDigits: 2 })
  return (value) => formatter.format(value)
}

function joinList(items: readonly string[], separator: string, connector: string): string {
  if (items.length === 0) return ''
  if (items.length === 1) return items[0]!
  const head = items.slice(0, -1).join(separator)
  const tail = items[items.length - 1]!
  return `${head} ${connector} ${tail}`
}
