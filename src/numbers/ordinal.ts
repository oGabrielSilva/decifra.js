import { resolveLocale } from '../defaults.js'
import { getLocale } from '../i18n/registry.js'
import type { LocaleId, OrdinalGender } from '../i18n/types.js'

export interface OrdinalOptions {
  /** Locale a usar. Default: locale global de `setDefaultLocale`. */
  locale?: LocaleId
  /** Gênero do sufixo (relevante em pt-BR: `'º'` masc, `'ª'` fem). Default `'male'`. */
  gender?: OrdinalGender
}

/**
 * Sufixo ordinal localizado. Decimais são truncados.
 *
 * @example
 * ```ts
 * ordinal(1)                                    // "1st"
 * ordinal(2)                                    // "2nd"
 * ordinal(11)                                   // "11th"
 * ordinal(1, { locale: 'pt-BR' })               // "1º"
 * ordinal(1, { locale: 'pt-BR', gender: 'female' }) // "1ª"
 * ```
 */
export function ordinal(value: number, opts: OrdinalOptions = {}): string {
  if (!Number.isFinite(value)) return String(value)
  const locale = resolveLocale(opts.locale)
  const gender = opts.gender ?? 'male'
  // Decimais são truncados para alinhar com humanize Python (que aplica int()).
  const integer = Math.trunc(value)
  return getLocale(locale).ordinal(integer, gender)
}
