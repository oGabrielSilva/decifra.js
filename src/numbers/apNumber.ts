import { resolveLocale } from '../defaults.js'
import { getLocale } from '../i18n/registry.js'
import type { LocaleId } from '../i18n/types.js'

export interface ApNumberOptions {
  /** Locale a usar. Default: locale global de `setDefaultLocale`. */
  locale?: LocaleId
}

/**
 * Estilo Associated Press: escreve dígitos de 0 a 9 por extenso, o resto
 * como string numérica. Decimais são truncados. Negativos passam direto.
 *
 * @example
 * ```ts
 * apNumber(4)                          // "four"
 * apNumber(4, { locale: 'pt-BR' })     // "quatro"
 * apNumber(10)                         // "10"
 * apNumber(-1)                         // "-1"
 * ```
 */
export function apNumber(value: number, opts: ApNumberOptions = {}): string {
  if (!Number.isFinite(value)) return String(value)
  // Decimais são truncados para alinhar com humanize Python (que aplica int()).
  const integer = Math.trunc(value)
  if (integer < 0 || integer > 9) return String(integer)
  const locale = resolveLocale(opts.locale)
  return getLocale(locale).apNumber[integer]!
}
