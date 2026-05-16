import { resolveLocale } from '../defaults.js'
import { getLocale } from '../i18n/registry.js'
import type { LocaleId } from '../i18n/types.js'
import { calendarDayDifference } from './calendar.js'

export interface NaturalDayOptions {
  locale?: LocaleId
  now?: Date
  format?: Intl.DateTimeFormatOptions
}

const DEFAULT_FORMAT: Intl.DateTimeFormatOptions = { month: 'short', day: '2-digit' }

export function naturalday(value: Date | number, opts: NaturalDayOptions = {}): string {
  const locale = resolveLocale(opts.locale)
  const time = getLocale(locale).time
  const date = value instanceof Date ? value : new Date(value)
  const now = opts.now ?? new Date()

  const diff = calendarDayDifference(date, now)
  if (diff === 0) return time.today
  if (diff === -1) return time.yesterday
  if (diff === 1) return time.tomorrow

  const format = opts.format ?? DEFAULT_FORMAT
  return new Intl.DateTimeFormat(locale, format).format(date)
}
