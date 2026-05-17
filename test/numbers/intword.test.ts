import { afterEach, describe, expect, it } from 'vitest'
import { intword } from '../../src/numbers/intword.js'
import { setDefaultLocale } from '../../src/defaults.js'

afterEach(() => {
  setDefaultLocale('en')
})

describe('intword', () => {
  describe('en (padrão)', () => {
    it('escala milhão', () => {
      expect(intword(123455913)).toBe('123.5 million')
    })

    it('singular em 1.0 million', () => {
      expect(intword(1_000_000)).toBe('1.0 million')
    })

    it('mantém valores < 1000 sem escala', () => {
      expect(intword(999)).toBe('999')
    })

    it('escala mil', () => {
      expect(intword(1234)).toBe('1.2 thousand')
    })

    it('escala quadrilhão', () => {
      expect(intword(1e15)).toBe('1.0 quadrillion')
    })

    it('negativos preservam sinal', () => {
      expect(intword(-1_000_000)).toBe('-1.0 million')
    })

    it('format customizado sobrescreve precisão padrão', () => {
      expect(intword(1234000, { format: (n) => n.toFixed(3) })).toBe('1.234 million')
    })
  })

  describe('pt-BR', () => {
    it('singular milhão', () => {
      expect(intword(1_000_000, { locale: 'pt-BR' })).toBe('1,0 milhão')
    })

    it('plural milhões', () => {
      expect(intword(123455913, { locale: 'pt-BR' })).toBe('123,5 milhões')
    })

    it('mil sem flexão', () => {
      expect(intword(1234, { locale: 'pt-BR' })).toBe('1,2 mil')
    })

    it('plural quatrilhões', () => {
      expect(intword(5e15, { locale: 'pt-BR' })).toBe('5,0 quatrilhões')
    })

    it('fracionário usa plural (PT culto)', () => {
      expect(intword(1_500_000, { locale: 'pt-BR' })).toBe('1,5 milhões')
    })

    it('negativo unitário usa singular pela magnitude', () => {
      expect(intword(-1_000_000, { locale: 'pt-BR' })).toBe('-1,0 milhão')
    })
  })

  describe('default global', () => {
    it('aplica setDefaultLocale', () => {
      setDefaultLocale('pt-BR')
      expect(intword(1_000_000)).toBe('1,0 milhão')
    })
  })

  describe('valores não finitos', () => {
    it('passa NaN como string', () => {
      expect(intword(NaN)).toBe('NaN')
    })
  })
})
