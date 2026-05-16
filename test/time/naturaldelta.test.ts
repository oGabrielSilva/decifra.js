import { afterEach, describe, expect, it } from 'vitest'
import { naturaldelta } from '../../src/time/naturaldelta.js'
import { setDefaultLocale } from '../../src/defaults.js'

afterEach(() => {
  setDefaultLocale('en')
})

describe('naturaldelta', () => {
  describe('en (padrão)', () => {
    it('1001 segundos vira 16 minutes', () => {
      expect(naturaldelta({ seconds: 1001 })).toBe('16 minutes')
    })

    it('1 segundo vira a second', () => {
      expect(naturaldelta({ seconds: 1 })).toBe('a second')
    })

    it('1 hora vira an hour', () => {
      expect(naturaldelta({ hours: 1 })).toBe('an hour')
    })

    it('1 dia vira a day', () => {
      expect(naturaldelta({ days: 1 })).toBe('a day')
    })

    it('365 dias vira a year', () => {
      expect(naturaldelta({ days: 365 })).toBe('a year')
    })

    it('0 vira a moment', () => {
      expect(naturaldelta(0)).toBe('a moment')
    })

    it('milissegundos sem flag vira a moment', () => {
      expect(naturaldelta({ milliseconds: 500 })).toBe('a moment')
    })

    it('milissegundos com flag', () => {
      expect(naturaldelta({ milliseconds: 4 }, { minimumUnit: 'milliseconds' })).toBe(
        '4 milliseconds',
      )
    })

    it('1 milissegundo singular', () => {
      expect(naturaldelta({ milliseconds: 1 }, { minimumUnit: 'milliseconds' })).toBe(
        'a millisecond',
      )
    })

    it('microssegundos', () => {
      expect(naturaldelta({ microseconds: 500 }, { minimumUnit: 'microseconds' })).toBe(
        '500 microseconds',
      )
    })

    it('months=false agrupa em dias até 1 ano', () => {
      expect(naturaldelta({ days: 100 }, { months: false })).toBe('100 days')
    })

    it('negativos seguem mesma magnitude', () => {
      expect(naturaldelta({ seconds: -1001 })).toBe('16 minutes')
    })
  })

  describe('pt-BR', () => {
    it('1001s vira 16 minutos', () => {
      expect(naturaldelta({ seconds: 1001 }, { locale: 'pt-BR' })).toBe('16 minutos')
    })

    it('1s vira um segundo', () => {
      expect(naturaldelta({ seconds: 1 }, { locale: 'pt-BR' })).toBe('um segundo')
    })

    it('1h vira uma hora', () => {
      expect(naturaldelta({ hours: 1 }, { locale: 'pt-BR' })).toBe('uma hora')
    })

    it('0 vira um momento', () => {
      expect(naturaldelta(0, { locale: 'pt-BR' })).toBe('um momento')
    })

    it('365 dias vira um ano', () => {
      expect(naturaldelta({ days: 365 }, { locale: 'pt-BR' })).toBe('um ano')
    })
  })

  describe('default global', () => {
    it('aplica setDefaultLocale', () => {
      setDefaultLocale('pt-BR')
      expect(naturaldelta({ minutes: 16 })).toBe('16 minutos')
    })
  })

  describe('aceita number ms direto', () => {
    it('1000 ms vira a second', () => {
      expect(naturaldelta(1000)).toBe('a second')
    })

    it('1_001_000 ms vira 16 minutes', () => {
      expect(naturaldelta(1_001_000)).toBe('16 minutes')
    })
  })
})
