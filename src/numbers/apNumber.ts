import { resolveLocale } from '../defaults.js'
import { getLocale } from '../i18n/registry.js'
import type { LocaleId } from '../i18n/types.js'

export interface ApNumberOptions {
  locale?: LocaleId
}

export function apNumber(value: number, opts: ApNumberOptions = {}): string {
  if (!Number.isFinite(value)) return String(value)
  // Decimais são truncados para alinhar com humanize Python (que aplica int()).
  const integer = Math.trunc(value)
  if (integer < 0 || integer > 9) return String(integer)
  const locale = resolveLocale(opts.locale)
  return getLocale(locale).apNumber[integer]!
}
