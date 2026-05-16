import { resolveLocale } from '../defaults.js'
import { getLocale } from '../i18n/registry.js'
import type { LocaleId } from '../i18n/types.js'
import { calendarDayDifference } from './calendar.js'

export interface NaturalDateOptions {
  locale?: LocaleId
  now?: Date
  format?: Intl.DateTimeFormatOptions
}

const FORMAT_NO_YEAR: Intl.DateTimeFormatOptions = { month: 'short', day: '2-digit' }
const FORMAT_WITH_YEAR: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'short',
  day: '2-digit',
}

export function naturaldate(value: Date | number, opts: NaturalDateOptions = {}): string {
  const locale = resolveLocale(opts.locale)
  const time = getLocale(locale).time
  const date = value instanceof Date ? value : new Date(value)
  const now = opts.now ?? new Date()

  const dayDiff = calendarDayDifference(date, now)
  if (dayDiff === 0) return time.today
  if (dayDiff === -1) return time.yesterday
  if (dayDiff === 1) return time.tomorrow

  const monthsAway = Math.abs(
    (now.getFullYear() - date.getFullYear()) * 12 + (now.getMonth() - date.getMonth()),
  )
  const includeYear = monthsAway > 5

  const format = opts.format ?? (includeYear ? FORMAT_WITH_YEAR : FORMAT_NO_YEAR)
  return new Intl.DateTimeFormat(locale, format).format(date)
}
