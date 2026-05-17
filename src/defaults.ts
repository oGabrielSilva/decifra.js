import type { LocaleId } from './i18n/types.js'

let defaultLocale: LocaleId = 'en'

/** Locale global atual. Inicia em `'en'`. */
export function getDefaultLocale(): LocaleId {
  return defaultLocale
}

/**
 * Define o locale global, usado quando uma função não recebe `opts.locale`.
 *
 * @example
 * ```ts
 * setDefaultLocale('pt-BR')
 * intComma(1234)  // "1.234"
 * ```
 */
export function setDefaultLocale(id: LocaleId): void {
  defaultLocale = id
}

/** @internal */
export function resolveLocale(id: LocaleId | undefined): LocaleId {
  return id ?? defaultLocale
}
