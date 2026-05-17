import { afterEach, describe, expect, it } from 'vitest'
import { apnumber } from '../../src/numbers/apnumber.js'
import { setDefaultLocale } from '../../src/defaults.js'

afterEach(() => {
  setDefaultLocale('en')
})

describe('apnumber', () => {
  describe('en (padrão)', () => {
    it('escreve zero', () => {
      expect(apnumber(0)).toBe('zero')
    })

    it('escreve nine', () => {
      expect(apnumber(9)).toBe('nine')
    })

    it('escreve four', () => {
      expect(apnumber(4)).toBe('four')
    })

    it('mantém 10 como dígito', () => {
      expect(apnumber(10)).toBe('10')
    })

    it('mantém negativos como dígitos', () => {
      expect(apnumber(-1)).toBe('-1')
    })

    it('decimais truncam para o dígito inteiro', () => {
      expect(apnumber(1.5)).toBe('one')
      expect(apnumber(7.9)).toBe('seven')
    })

    it('NaN passa direto', () => {
      expect(apnumber(NaN)).toBe('NaN')
    })

    it('Infinity passa direto', () => {
      expect(apnumber(Infinity)).toBe('Infinity')
    })
  })

  describe('pt-BR', () => {
    it('escreve quatro', () => {
      expect(apnumber(4, { locale: 'pt-BR' })).toBe('quatro')
    })

    it('escreve três', () => {
      expect(apnumber(3, { locale: 'pt-BR' })).toBe('três')
    })
  })

  describe('default global', () => {
    it('aplica setDefaultLocale', () => {
      setDefaultLocale('pt-BR')
      expect(apnumber(5)).toBe('cinco')
    })
  })
})
