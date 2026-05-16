import { resolveLocale } from '../defaults.js'
import type { LocaleId } from '../i18n/types.js'

export interface IntcommaOptions {
  locale?: LocaleId
  ndigits?: number
}

export function intcomma(value: number, opts: IntcommaOptions = {}): string {
  if (!Number.isFinite(value)) return String(value)

  const locale = resolveLocale(opts.locale)
  const formatter = new Intl.NumberFormat(locale, {
    useGrouping: true,
    minimumFractionDigits: opts.ndigits,
    maximumFractionDigits: opts.ndigits,
  })

  return formatter.format(value)
}
