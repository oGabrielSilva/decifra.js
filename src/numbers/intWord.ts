import { resolveLocale } from '../defaults.js'
import { getLocale } from '../i18n/registry.js'
import type { LocaleId } from '../i18n/types.js'
import { getNumberFormat } from '../util/intl-cache.js'

export interface IntWordOptions {
  /** Locale a usar. Default: locale global de `setDefaultLocale`. */
  locale?: LocaleId
  /** Formatador da mantissa escalada. Default: 1 casa decimal localizada. */
  format?: (value: number) => string
}

/**
 * Converte um número grande em texto com escala (mil, milhão, bilhão, …).
 * Valores abaixo de 1000 retornam como string sem escala.
 *
 * @example
 * ```ts
 * intWord(123_455_913)                        // "123.5 million"
 * intWord(123_455_913, { locale: 'pt-BR' })   // "123,5 milhões"
 * intWord(1_000_000, { locale: 'pt-BR' })     // "1,0 milhão"
 * intWord(999)                                // "999"
 * ```
 */
export function intWord(value: number, opts: IntWordOptions = {}): string {
  if (!Number.isFinite(value)) return String(value)

  const locale = resolveLocale(opts.locale)
  const abs = Math.abs(value)

  if (abs < 1000) return String(value)

  const scales = getLocale(locale).intWordScales
  let scale = scales[0]!
  for (const candidate of scales) {
    if (abs >= 10 ** candidate.exponent) scale = candidate
    else break
  }

  const scaled = value / 10 ** scale.exponent
  const format = opts.format ?? defaultFormat(locale)
  const formatted = format(scaled)
  // Pluralização de magnitude: usa "1 milhão" mas "1,5 milhões" (PT culto).
  // Intl.PluralRules('pt-BR').select(1.5) === 'one' devolveria "milhão", então
  // a regra é checar magnitude exata em vez de categoria CLDR.
  const label = Math.abs(scaled) === 1 ? scale.one : scale.other

  return `${formatted} ${label}`
}

function defaultFormat(locale: LocaleId): (value: number) => string {
  const formatter = getNumberFormat(locale, {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  })
  return (value) => formatter.format(value)
}
