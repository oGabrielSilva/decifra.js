import type { LocaleId } from './i18n/types.js'

let defaultLocale: LocaleId = 'en'

export function getDefaultLocale(): LocaleId {
  return defaultLocale
}

export function setDefaultLocale(id: LocaleId): void {
  defaultLocale = id
}

export function resolveLocale(id: LocaleId | undefined): LocaleId {
  return id ?? defaultLocale
}
