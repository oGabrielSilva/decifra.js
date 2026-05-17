import { afterEach, describe, expect, it } from 'vitest'
import { scientific } from '../../src/numbers/scientific.js'
import { setDefaultLocale } from '../../src/defaults.js'

afterEach(() => {
  setDefaultLocale('en')
})

describe('scientific', () => {
  describe('en (padrão)', () => {
    it('0.3 com expoente negativo', () => {
      expect(scientific(0.3)).toBe('3.00 × 10⁻¹')
    })

    it('500 com expoente positivo', () => {
      expect(scientific(500)).toBe('5.00 × 10²')
    })

    it('precision customizada', () => {
      expect(scientific(1.23456e-7, { precision: 3 })).toBe('1.235 × 10⁻⁷')
    })

    it('expoente zero', () => {
      expect(scientific(1)).toBe('1.00 × 10⁰')
    })

    it('negativos', () => {
      expect(scientific(-500)).toBe('-5.00 × 10²')
    })

    it('precision 0 sem decimais', () => {
      expect(scientific(500, { precision: 0 })).toBe('5 × 10²')
    })
  })

  describe('pt-BR', () => {
    it('usa vírgula como separador decimal', () => {
      expect(scientific(0.3, { locale: 'pt-BR' })).toBe('3,00 × 10⁻¹')
    })
  })

  describe('default global', () => {
    it('aplica setDefaultLocale', () => {
      setDefaultLocale('pt-BR')
      expect(scientific(500)).toBe('5,00 × 10²')
    })
  })

  describe('valores não finitos', () => {
    it('NaN', () => {
      expect(scientific(NaN)).toBe('NaN')
    })

    it('Infinity', () => {
      expect(scientific(Infinity)).toBe('Infinity')
    })
  })

  describe('expoentes de dois dígitos', () => {
    it('1e10 com expoente positivo de 2 dígitos', () => {
      expect(scientific(1e10)).toBe('1.00 × 10¹⁰')
    })

    it('1e-10 com expoente negativo de 2 dígitos', () => {
      expect(scientific(1e-10)).toBe('1.00 × 10⁻¹⁰')
    })

    it('1e100 com expoente de 3 dígitos', () => {
      expect(scientific(1e100)).toBe('1.00 × 10¹⁰⁰')
    })
  })

  describe('precisão zero pt-BR', () => {
    it('500 com precision 0 e vírgula', () => {
      expect(scientific(500, { precision: 0, locale: 'pt-BR' })).toBe('5 × 10²')
    })
  })
})
