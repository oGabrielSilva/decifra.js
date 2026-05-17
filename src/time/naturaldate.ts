import { resolveLocale } from '../defaults.js'
import type { LocaleId } from '../i18n/types.js'

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

/**
 * Formata uma data localmente, incluindo o ano quando ela está a mais de
 * cinco meses do `now` de referência. Diferente de `naturalday`, sempre
 * retorna data formatada (não delega para "hoje" / "ontem" / "amanhã").
 */
export function naturaldate(value: Date | number, opts: NaturalDateOptions = {}): string {
  const locale = resolveLocale(opts.locale)
  const date = value instanceof Date ? value : new Date(value)
  const now = opts.now ?? new Date()

  const monthsAway = Math.abs(
    (now.getFullYear() - date.getFullYear()) * 12 + (now.getMonth() - date.getMonth()),
  )
  const includeYear = monthsAway > 5

  const format = opts.format ?? (includeYear ? FORMAT_WITH_YEAR : FORMAT_NO_YEAR)
  return new Intl.DateTimeFormat(locale, format).format(date)
}
