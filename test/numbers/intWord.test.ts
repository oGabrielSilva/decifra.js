import { afterEach, describe, expect, it } from 'vitest'
import { intWord } from '../../src/numbers/intWord.js'
import { setDefaultLocale } from '../../src/defaults.js'

afterEach(() => {
  setDefaultLocale('en')
})

describe('intWord', () => {
  describe('en (padrão)', () => {
    it('escala milhão', () => {
      expect(intWord(123455913)).toBe('123.5 million')
    })

    it('singular em 1.0 million', () => {
      expect(intWord(1_000_000)).toBe('1.0 million')
    })

    it('mantém valores < 1000 sem escala', () => {
      expect(intWord(999)).toBe('999')
    })

    it('escala mil', () => {
      expect(intWord(1234)).toBe('1.2 thousand')
    })

    it('escala quadrilhão', () => {
      expect(intWord(1e15)).toBe('1.0 quadrillion')
    })

    it('negativos preservam sinal', () => {
      expect(intWord(-1_000_000)).toBe('-1.0 million')
    })

    it('format customizado sobrescreve precisão padrão', () => {
      expect(intWord(1234000, { format: (n) => n.toFixed(3) })).toBe('1.234 million')
    })
  })

  describe('pt-BR', () => {
    it('singular milhão', () => {
      expect(intWord(1_000_000, { locale: 'pt-BR' })).toBe('1,0 milhão')
    })

    it('plural milhões', () => {
      expect(intWord(123455913, { locale: 'pt-BR' })).toBe('123,5 milhões')
    })

    it('mil sem flexão', () => {
      expect(intWord(1234, { locale: 'pt-BR' })).toBe('1,2 mil')
    })

    it('plural quatrilhões', () => {
      expect(intWord(5e15, { locale: 'pt-BR' })).toBe('5,0 quatrilhões')
    })

    it('fracionário usa plural (PT culto)', () => {
      expect(intWord(1_500_000, { locale: 'pt-BR' })).toBe('1,5 milhões')
    })

    it('negativo unitário usa singular pela magnitude', () => {
      expect(intWord(-1_000_000, { locale: 'pt-BR' })).toBe('-1,0 milhão')
    })
  })

  describe('valores extremos', () => {
    it('1e100 vira 1.0 googol', () => {
      expect(intWord(1e100)).toBe('1.0 googol')
    })

    it('5e100 vira 5.0 googol', () => {
      expect(intWord(5e100)).toBe('5.0 googol')
    })

    it('1e200 escala como múltiplos de googol', () => {
      const result = intWord(1e200)
      expect(result).toContain('googol')
    })
  })

  describe('default global', () => {
    it('aplica setDefaultLocale', () => {
      setDefaultLocale('pt-BR')
      expect(intWord(1_000_000)).toBe('1,0 milhão')
    })
  })

  describe('valores não finitos', () => {
    it('passa NaN como string', () => {
      expect(intWord(NaN)).toBe('NaN')
    })
  })
})
