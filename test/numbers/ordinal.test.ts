import { afterEach, describe, expect, it } from 'vitest'
import { ordinal } from '../../src/numbers/ordinal.js'
import { setDefaultLocale } from '../../src/defaults.js'

afterEach(() => {
  setDefaultLocale('en')
})

describe('ordinal', () => {
  describe('en (padrão)', () => {
    it('1 vira 1st', () => {
      expect(ordinal(1)).toBe('1st')
    })

    it('2 vira 2nd', () => {
      expect(ordinal(2)).toBe('2nd')
    })

    it('3 vira 3rd', () => {
      expect(ordinal(3)).toBe('3rd')
    })

    it('4 vira 4th', () => {
      expect(ordinal(4)).toBe('4th')
    })

    it('11 vira 11th (exceção da regra)', () => {
      expect(ordinal(11)).toBe('11th')
    })

    it('21 vira 21st', () => {
      expect(ordinal(21)).toBe('21st')
    })

    it('102 vira 102nd', () => {
      expect(ordinal(102)).toBe('102nd')
    })

    it('113 vira 113th', () => {
      expect(ordinal(113)).toBe('113th')
    })
  })

  describe('pt-BR', () => {
    it('masculino por padrão', () => {
      expect(ordinal(1, { locale: 'pt-BR' })).toBe('1º')
    })

    it('feminino quando solicitado', () => {
      expect(ordinal(1, { locale: 'pt-BR', gender: 'female' })).toBe('1ª')
    })

    it('grandes números mantêm sufixo', () => {
      expect(ordinal(102, { locale: 'pt-BR' })).toBe('102º')
    })
  })

  describe('default global', () => {
    it('aplica setDefaultLocale', () => {
      setDefaultLocale('pt-BR')
      expect(ordinal(1)).toBe('1º')
    })
  })
})
