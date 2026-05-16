import { afterEach, describe, expect, it } from 'vitest'
import { intcomma } from '../../src/numbers/intcomma.js'
import { setDefaultLocale } from '../../src/defaults.js'

afterEach(() => {
  setDefaultLocale('en')
})

describe('intcomma', () => {
  describe('en (padrão)', () => {
    it('agrupa milhares com vírgula', () => {
      expect(intcomma(12345)).toBe('12,345')
    })

    it('respeita ndigits com arredondamento', () => {
      expect(intcomma(1234.5454545, { ndigits: 2 })).toBe('1,234.55')
    })

    it('formata zero', () => {
      expect(intcomma(0)).toBe('0')
    })

    it('formata negativos', () => {
      expect(intcomma(-1000)).toBe('-1,000')
    })

    it('formata bilhão', () => {
      expect(intcomma(1_000_000_000)).toBe('1,000,000,000')
    })
  })

  describe('pt-BR', () => {
    it('agrupa milhares com ponto', () => {
      expect(intcomma(12345, { locale: 'pt-BR' })).toBe('12.345')
    })

    it('decimais com vírgula', () => {
      expect(intcomma(1234.5454545, { locale: 'pt-BR', ndigits: 2 })).toBe('1.234,55')
    })
  })

  describe('default global', () => {
    it('aplica setDefaultLocale quando opts.locale é omitido', () => {
      setDefaultLocale('pt-BR')
      expect(intcomma(1234)).toBe('1.234')
    })

    it('opts.locale sobrescreve default', () => {
      setDefaultLocale('pt-BR')
      expect(intcomma(1234, { locale: 'en' })).toBe('1,234')
    })
  })

  describe('valores não finitos', () => {
    it('passa NaN como string', () => {
      expect(intcomma(NaN)).toBe('NaN')
    })

    it('passa Infinity como string', () => {
      expect(intcomma(Infinity)).toBe('Infinity')
    })
  })
})
