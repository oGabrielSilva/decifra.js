import { resolveLocale } from '../defaults.js'
import { getLocale } from '../i18n/registry.js'
import type { LocaleId } from '../i18n/types.js'

export interface ApNumberOptions {
  locale?: LocaleId
}

export function apnumber(value: number, opts: ApNumberOptions = {}): string {
  if (!Number.isInteger(value) || value < 0 || value > 9) return String(value)
  const locale = resolveLocale(opts.locale)
  return getLocale(locale).apnumber[value]!
}
