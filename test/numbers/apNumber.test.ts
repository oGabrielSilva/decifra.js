import { afterEach, describe, expect, it } from 'vitest'
import { apNumber } from '../../src/numbers/apNumber.js'
import { setDefaultLocale } from '../../src/defaults.js'

afterEach(() => {
  setDefaultLocale('en')
})

describe('apNumber', () => {
  describe('en (padrão)', () => {
    it('escreve zero', () => {
      expect(apNumber(0)).toBe('zero')
    })

    it('escreve nine', () => {
      expect(apNumber(9)).toBe('nine')
    })

    it('escreve four', () => {
      expect(apNumber(4)).toBe('four')
    })

    it('mantém 10 como dígito', () => {
      expect(apNumber(10)).toBe('10')
    })

    it('mantém negativos como dígitos', () => {
      expect(apNumber(-1)).toBe('-1')
    })

    it('decimais truncam para o dígito inteiro', () => {
      expect(apNumber(1.5)).toBe('one')
      expect(apNumber(7.9)).toBe('seven')
    })

    it('NaN passa direto', () => {
      expect(apNumber(NaN)).toBe('NaN')
    })

    it('Infinity passa direto', () => {
      expect(apNumber(Infinity)).toBe('Infinity')
    })
  })

  describe('pt-BR', () => {
    it('escreve quatro', () => {
      expect(apNumber(4, { locale: 'pt-BR' })).toBe('quatro')
    })

    it('escreve três', () => {
      expect(apNumber(3, { locale: 'pt-BR' })).toBe('três')
    })
  })

  describe('default global', () => {
    it('aplica setDefaultLocale', () => {
      setDefaultLocale('pt-BR')
      expect(apNumber(5)).toBe('cinco')
    })
  })
})
