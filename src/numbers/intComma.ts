import { resolveLocale } from '../defaults.js'
import type { LocaleId } from '../i18n/types.js'
import { getNumberFormat } from '../util/intl-cache.js'

export interface IntCommaOptions {
  /** Locale a usar. Default: locale global de `setDefaultLocale`. */
  locale?: LocaleId
  /** Número de casas decimais (fixas). Se omitido, preserva o original. */
  ndigits?: number
}

/**
 * Formata um número com separador de milhares localizado.
 *
 * @example
 * ```ts
 * intComma(1_234_567)                          // "1,234,567"
 * intComma(1_234_567, { locale: 'pt-BR' })     // "1.234.567"
 * intComma(1234.5454, { ndigits: 2 })          // "1,234.55"
 * ```
 */
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
