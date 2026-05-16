import type { LocaleId, LocaleStrings } from './types.js'
import { en } from './locales/en.js'
import { ptBR } from './locales/pt-BR.js'

const registry = new Map<LocaleId, LocaleStrings>([
  ['en', en],
  ['pt-BR', ptBR],
])

export function getLocale(id: LocaleId): LocaleStrings {
  const strings = registry.get(id)
  if (!strings) {
    throw new Error(`Locale "${id}" is not registered`)
  }
  return strings
}

export function listLocales(): LocaleId[] {
  return [...registry.keys()]
}
