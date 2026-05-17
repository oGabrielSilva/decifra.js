import { resolveLocale } from '../defaults.js'
import type { LocaleId } from '../i18n/types.js'

export interface IntcommaOptions {
  locale?: LocaleId
  ndigits?: number
}

export function intcomma(value: number, opts: IntcommaOptions = {}): string {
  if (!Number.isFinite(value)) return String(value)

  const locale = resolveLocale(opts.locale)
  // Intl.NumberFormat default limita a 3 casas decimais; preservamos todas as
  // casas significativas do float (até o limite de fp64) quando ndigits não é
  // explicitado, alinhando com o comportamento de humanize Python.
  const formatter = new Intl.NumberFormat(locale, {
    useGrouping: true,
    minimumFractionDigits: opts.ndigits,
    maximumFractionDigits: opts.ndigits ?? 20,
  })

  return formatter.format(value)
}
