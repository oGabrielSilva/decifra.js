import { describe, expect, it } from 'vitest'
import { getLocale, listLocales } from '../../src/i18n/registry.js'

describe('registry de locales', () => {
  it('expõe en com id "en"', () => {
    expect(getLocale('en').id).toBe('en')
  })

  it('expõe pt-BR com id "pt-BR"', () => {
    expect(getLocale('pt-BR').id).toBe('pt-BR')
  })

  it('lista todos os locales registrados', () => {
    expect(listLocales().sort()).toEqual(['en', 'pt-BR'])
  })
})
