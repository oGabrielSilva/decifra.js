import { resolveLocale } from '../defaults.js'
import type { LocaleId } from '../i18n/types.js'
import { getNumberFormat } from '../util/intl-cache.js'

export interface ScientificOptions {
  locale?: LocaleId
  precision?: number
}

const SUPERSCRIPT: Record<string, string> = {
  '0': '⁰',
  '1': '¹',
  '2': '²',
  '3': '³',
  '4': '⁴',
  '5': '⁵',
  '6': '⁶',
  '7': '⁷',
  '8': '⁸',
  '9': '⁹',
  '-': '⁻',
  '+': '⁺',
}

/**
 * Notação científica com mantissa e expoente em sobrescrito Unicode.
 *
 * Usamos `×` (U+00D7, sinal de multiplicação) em vez do `x` ASCII que o
 * humanize Python emite. É o glifo correto para multiplicação matemática
 * e é o que LaTeX, Wikipedia e a literatura científica usam. Divergência
 * intencional do upstream.
 */
export function scientific(value: number, opts: ScientificOptions = {}): string {
  if (!Number.isFinite(value)) return String(value)

  const locale = resolveLocale(opts.locale)
  const precision = opts.precision ?? 2

  const parts = getNumberFormat(locale, {
    notation: 'scientific',
    minimumFractionDigits: precision,
    maximumFractionDigits: precision,
  }).formatToParts(value)

  const mantissaParts: string[] = []
  const exponentParts: string[] = []
  let seenSeparator = false
  for (const part of parts) {
    if (part.type === 'exponentSeparator') {
      seenSeparator = true
      continue
    }
    if (!seenSeparator) {
      mantissaParts.push(part.value)
    } else {
      exponentParts.push(part.value)
    }
  }

  const mantissa = mantissaParts.join('')
  const exponent = [...exponentParts.join('')].map((ch) => SUPERSCRIPT[ch] ?? ch).join('')

  return `${mantissa} × 10${exponent}`
}
