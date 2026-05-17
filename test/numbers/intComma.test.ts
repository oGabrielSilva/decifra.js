import { afterEach, describe, expect, it } from 'vitest'
import { intComma } from '../../src/numbers/intComma.js'
import { setDefaultLocale } from '../../src/defaults.js'

afterEach(() => {
  setDefaultLocale('en')
})

describe('intComma', () => {
  describe('en (padrão)', () => {
    it('agrupa milhares com vírgula', () => {
      expect(intComma(12345)).toBe('12,345')
    })

    it('respeita ndigits com arredondamento', () => {
      expect(intComma(1234.5454545, { ndigits: 2 })).toBe('1,234.55')
    })

    it('formata zero', () => {
      expect(intComma(0)).toBe('0')
    })

    it('formata negativos', () => {
      expect(intComma(-1000)).toBe('-1,000')
    })

    it('formata bilhão', () => {
      expect(intComma(1_000_000_000)).toBe('1,000,000,000')
    })

    it('preserva precisão decimal além de 3 casas quando ndigits ausente', () => {
      expect(intComma(14308.4)).toBe('14,308.4')
      expect(intComma(0.123456)).toBe('0.123456')
    })
  })

  describe('pt-BR', () => {
    it('agrupa milhares com ponto', () => {
      expect(intComma(12345, { locale: 'pt-BR' })).toBe('12.345')
    })

    it('decimais com vírgula', () => {
      expect(intComma(1234.5454545, { locale: 'pt-BR', ndigits: 2 })).toBe('1.234,55')
    })
  })

  describe('default global', () => {
    it('aplica setDefaultLocale quando opts.locale é omitido', () => {
      setDefaultLocale('pt-BR')
      expect(intComma(1234)).toBe('1.234')
    })

    it('opts.locale sobrescreve default', () => {
      setDefaultLocale('pt-BR')
      expect(intComma(1234, { locale: 'en' })).toBe('1,234')
    })
  })

  describe('valores não finitos', () => {
    it('passa NaN como string', () => {
      expect(intComma(NaN)).toBe('NaN')
    })

    it('passa Infinity como string', () => {
      expect(intComma(Infinity)).toBe('Infinity')
    })

    it('NaN em pt-BR também passa', () => {
      expect(intComma(NaN, { locale: 'pt-BR' })).toBe('NaN')
    })

    it('ndigits: 0 força ausência de decimais', () => {
      expect(intComma(1234.567, { ndigits: 0 })).toBe('1,235')
      expect(intComma(1234.567, { ndigits: 0, locale: 'pt-BR' })).toBe('1.235')
    })
  })
})
