import { afterEach, describe, expect, it } from 'vitest'
import { getDefaultLocale, resolveLocale, setDefaultLocale } from '../src/defaults.js'

afterEach(() => {
  setDefaultLocale('en')
})

describe('default locale', () => {
  it('começa em en', () => {
    expect(getDefaultLocale()).toBe('en')
  })

  it('muda via setDefaultLocale', () => {
    setDefaultLocale('pt-BR')
    expect(getDefaultLocale()).toBe('pt-BR')
  })

  it('resolveLocale usa o parâmetro quando passado', () => {
    setDefaultLocale('en')
    expect(resolveLocale('pt-BR')).toBe('pt-BR')
  })

  it('resolveLocale cai no default quando undefined', () => {
    setDefaultLocale('pt-BR')
    expect(resolveLocale(undefined)).toBe('pt-BR')
  })
})
