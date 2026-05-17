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
  /**
   * Unidades que devem ser omitidas. Default `['week']`: humanize Python não
   * tem semana na hierarquia, então semanas sempre seriam absorvidas em dias.
   * Para habilitar semanas explicitamente, passe `suppress: []`.
   */
  suppress?: readonly PrecisedeltaUnit[]
  /** Formato customizado aplicado apenas ao último valor quando ele é fracionário. */
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

// Valores em microssegundos para garantir aritmética inteira.
// Evita drift de ponto flutuante quando minimumUnit é 'microsecond'.
const UNIT_US: Record<PrecisedeltaUnit, number> = {
  year: YEAR * 1000,
  month: MONTH * 1000,
  week: WEEK * 1000,
  day: DAY * 1000,
  hour: HOUR * 1000,
  minute: MINUTE * 1000,
  second: SECOND * 1000,
  millisecond: 1000,
  microsecond: 1,
}

export function precisedelta(delta: Delta, opts: PrecisedeltaOptions = {}): string {
  const locale = resolveLocale(opts.locale)
  const time = getLocale(locale).time
  const minimumUnit = opts.minimumUnit ?? 'second'
  const suppress = new Set(opts.suppress ?? ['week'])

  const minIdx = UNIT_ORDER.indexOf(minimumUnit)
  const activeUnits = UNIT_ORDER.slice(0, minIdx + 1).filter((u) => !suppress.has(u))
  if (activeUnits.length === 0) activeUnits.push(minimumUnit)

  let remainingUs = Math.round(Math.abs(toMilliseconds(delta)) * 1000)

  type Part = { unit: PrecisedeltaUnit; value: number }
  const parts: Part[] = []
  for (let i = 0; i < activeUnits.length; i++) {
    const unit = activeUnits[i]!
    const unitUs = UNIT_US[unit]
    const isLast = i === activeUnits.length - 1
    if (isLast) {
      parts.push({ unit, value: remainingUs / unitUs })
    } else {
      const whole = Math.floor(remainingUs / unitUs)
      remainingUs -= whole * unitUs
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
