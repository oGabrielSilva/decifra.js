import { resolveLocale } from '../defaults.js'
import { getLocale } from '../i18n/registry.js'
import type { LocaleId } from '../i18n/types.js'
import { getDateTimeFormat } from '../util/intl-cache.js'
import { calendarDayDifference } from './calendar.js'

export interface NaturalDayOptions {
  /** Locale a usar. Default: locale global de `setDefaultLocale`. */
  locale?: LocaleId
  /** Data de referência. Default `new Date()`. Use para testes determinísticos. */
  now?: Date
  /** Opções de `Intl.DateTimeFormat` para datas fora de hoje/ontem/amanhã. */
  format?: Intl.DateTimeFormatOptions
}

const DEFAULT_FORMAT: Intl.DateTimeFormatOptions = { month: 'short', day: '2-digit' }

/**
 * Retorna "hoje", "ontem", "amanhã" (localizado) para datas próximas.
 * Caso contrário formata a data via `Intl.DateTimeFormat`.
 *
 * @example
 * ```ts
 * naturalDay(new Date())                                  // "today"
 * naturalDay(yesterday, { locale: 'pt-BR' })              // "ontem"
 * naturalDay(new Date(2020, 0, 2))                        // "Jan 02"
 * ```
 */
export function naturalDay(value: Date | number, opts: NaturalDayOptions = {}): string {
  const locale = resolveLocale(opts.locale)
  const time = getLocale(locale).time
  const date = value instanceof Date ? value : new Date(value)
  const now = opts.now ?? new Date()

  const diff = calendarDayDifference(date, now)
  if (diff === 0) return time.today
  if (diff === -1) return time.yesterday
  if (diff === 1) return time.tomorrow

  const format = opts.format ?? DEFAULT_FORMAT
  return getDateTimeFormat(locale, format).format(date)
}
