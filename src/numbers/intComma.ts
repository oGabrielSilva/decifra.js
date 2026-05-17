import { resolveLocale } from '../defaults.js'
import type { LocaleId } from '../i18n/types.js'
import { getNumberFormat } from '../util/intl-cache.js'

export interface IntCommaOptions {
  locale?: LocaleId
  ndigits?: number
}

export function intComma(value: number, opts: IntCommaOptions = {}): string {
  if (!Number.isFinite(value)) return String(value)

  const locale = resolveLocale(opts.locale)
  // Intl.NumberFormat default limita a 3 casas decimais; preservamos todas as
  // casas significativas do float (até o limite de fp64) quando ndigits não é
  // explicitado, alinhando com o comportamento de humanize Python.
  const options: Intl.NumberFormatOptions = {
    useGrouping: true,
    maximumFractionDigits: opts.ndigits ?? 20,
  }
  if (opts.ndigits !== undefined) options.minimumFractionDigits = opts.ndigits
  return getNumberFormat(locale, options).format(value)
}
