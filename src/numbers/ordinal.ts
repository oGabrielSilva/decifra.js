import { resolveLocale } from '../defaults.js'
import { getLocale } from '../i18n/registry.js'
import type { LocaleId, OrdinalGender } from '../i18n/types.js'

export interface OrdinalOptions {
  locale?: LocaleId
  gender?: OrdinalGender
}

export function ordinal(value: number, opts: OrdinalOptions = {}): string {
  if (!Number.isFinite(value)) return String(value)
  const locale = resolveLocale(opts.locale)
  const gender = opts.gender ?? 'male'
  // Decimais são truncados para alinhar com humanize Python (que aplica int()).
  const integer = Math.trunc(value)
  return getLocale(locale).ordinal(integer, gender)
}
