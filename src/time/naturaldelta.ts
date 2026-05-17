import { resolveLocale } from '../defaults.js'
import { getLocale } from '../i18n/registry.js'
import type { LocaleId, TimeWords, UnitWords } from '../i18n/types.js'
import { DAY, HOUR, MINUTE, MONTH, SECOND, YEAR, toMilliseconds } from './duration.js'
import type { Delta } from './duration.js'

export type MinimumTimeUnit = 'microseconds' | 'milliseconds' | 'seconds'

export interface NaturalDeltaOptions {
  locale?: LocaleId
  minimumUnit?: MinimumTimeUnit
  months?: boolean
}

export function naturaldelta(delta: Delta, opts: NaturalDeltaOptions = {}): string {
  const locale = resolveLocale(opts.locale)
  const time = getLocale(locale).time
  const ms = toMilliseconds(delta)
  const abs = Math.abs(ms)
  const minimumUnit = opts.minimumUnit ?? 'seconds'
  const includeMonths = opts.months ?? true

  // Zero exato sempre é "a moment", independente de minimumUnit.
  if (abs === 0) return time.moment

  if (abs < SECOND) {
    if (minimumUnit === 'milliseconds') {
      return renderUnit(Math.round(abs), time.millisecond, locale)
    }
    if (minimumUnit === 'microseconds') {
      return renderUnit(Math.round(abs * 1000), time.microsecond, locale)
    }
    return time.moment
  }
  if (abs < MINUTE) return renderUnit(Math.round(abs / SECOND), time.second, locale)
  if (abs < HOUR) return renderUnit(Math.floor(abs / MINUTE), time.minute, locale)
  if (abs < DAY) return renderUnit(Math.floor(abs / HOUR), time.hour, locale)

  if (!includeMonths) {
    if (abs < YEAR) return renderUnit(Math.floor(abs / DAY), time.day, locale)
    return renderUnit(Math.floor(abs / YEAR), time.year, locale)
  }

  if (abs < MONTH) return renderUnit(Math.floor(abs / DAY), time.day, locale)
  if (abs < YEAR) return renderUnit(Math.floor(abs / MONTH), time.month, locale)
  return renderUnit(Math.floor(abs / YEAR), time.year, locale)
}

function renderUnit(count: number, words: UnitWords, locale: LocaleId): string {
  if (count === 1) return words.singular
  const formatted = new Intl.NumberFormat(locale).format(count)
  return `${formatted} ${words.plural}`
}

export type { TimeWords }
