import { resolveLocale } from '../defaults.js'
import { getLocale } from '../i18n/registry.js'
import type { LocaleId } from '../i18n/types.js'

export interface IntwordOptions {
  locale?: LocaleId
  format?: (value: number) => string
}

export function intword(value: number, opts: IntwordOptions = {}): string {
  if (!Number.isFinite(value)) return String(value)

  const locale = resolveLocale(opts.locale)
  const abs = Math.abs(value)

  if (abs < 1000) return String(value)

  const scales = getLocale(locale).intwordScales
  let scale = scales[0]!
  for (const candidate of scales) {
    if (abs >= 10 ** candidate.exponent) scale = candidate
    else break
  }

  const scaled = value / 10 ** scale.exponent
  const format = opts.format ?? defaultFormat(locale)
  const formatted = format(scaled)
  const plural = new Intl.PluralRules(locale).select(scaled)
  const label = plural === 'one' ? scale.one : scale.other

  return `${formatted} ${label}`
}

function defaultFormat(locale: LocaleId): (value: number) => string {
  const formatter = new Intl.NumberFormat(locale, {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  })
  return (value) => formatter.format(value)
}
