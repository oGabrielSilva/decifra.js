import { afterEach, describe, expect, it } from 'vitest'
import { naturalDelta } from '../../src/time/naturalDelta.js'
import { setDefaultLocale } from '../../src/defaults.js'

afterEach(() => {
  setDefaultLocale('en')
})

describe('naturalDelta', () => {
  describe('en (padrão)', () => {
    it('1001 segundos vira 16 minutes', () => {
      expect(naturalDelta({ seconds: 1001 })).toBe('16 minutes')
    })

    it('1 segundo vira a second', () => {
      expect(naturalDelta({ seconds: 1 })).toBe('a second')
    })

    it('1 hora vira an hour', () => {
      expect(naturalDelta({ hours: 1 })).toBe('an hour')
    })

    it('1 dia vira a day', () => {
      expect(naturalDelta({ days: 1 })).toBe('a day')
    })

    it('365 dias vira a year', () => {
      expect(naturalDelta({ days: 365 })).toBe('a year')
    })

    it('0 vira a moment', () => {
      expect(naturalDelta(0)).toBe('a moment')
    })

    it('milissegundos sem flag vira a moment', () => {
      expect(naturalDelta({ milliseconds: 500 })).toBe('a moment')
    })

    it('milissegundos com flag', () => {
      expect(naturalDelta({ milliseconds: 4 }, { minimumUnit: 'milliseconds' })).toBe(
        '4 milliseconds',
      )
    })

    it('zero exato sempre é a moment, mesmo com minimumUnit', () => {
      expect(naturalDelta(0, { minimumUnit: 'milliseconds' })).toBe('a moment')
      expect(naturalDelta(0, { minimumUnit: 'microseconds' })).toBe('a moment')
    })

    it('1 milissegundo singular', () => {
      expect(naturalDelta({ milliseconds: 1 }, { minimumUnit: 'milliseconds' })).toBe(
        'a millisecond',
      )
    })

    it('microssegundos', () => {
      expect(naturalDelta({ microseconds: 500 }, { minimumUnit: 'microseconds' })).toBe(
        '500 microseconds',
      )
    })

    it('months=false agrupa em dias até 1 ano', () => {
      expect(naturalDelta({ days: 100 }, { months: false })).toBe('100 days')
    })

    it('negativos seguem mesma magnitude', () => {
      expect(naturalDelta({ seconds: -1001 })).toBe('16 minutes')
    })
  })

  describe('pt-BR', () => {
    it('1001s vira 16 minutos', () => {
      expect(naturalDelta({ seconds: 1001 }, { locale: 'pt-BR' })).toBe('16 minutos')
    })

    it('1s vira um segundo', () => {
      expect(naturalDelta({ seconds: 1 }, { locale: 'pt-BR' })).toBe('um segundo')
    })

    it('1h vira uma hora', () => {
      expect(naturalDelta({ hours: 1 }, { locale: 'pt-BR' })).toBe('uma hora')
    })

    it('0 vira um momento', () => {
      expect(naturalDelta(0, { locale: 'pt-BR' })).toBe('um momento')
    })

    it('365 dias vira um ano', () => {
      expect(naturalDelta({ days: 365 }, { locale: 'pt-BR' })).toBe('um ano')
    })
  })

  describe('default global', () => {
    it('aplica setDefaultLocale', () => {
      setDefaultLocale('pt-BR')
      expect(naturalDelta({ minutes: 16 })).toBe('16 minutos')
    })
  })

  describe('aceita number ms direto', () => {
    it('1000 ms vira a second', () => {
      expect(naturalDelta(1000)).toBe('a second')
    })

    it('1_001_000 ms vira 16 minutes', () => {
      expect(naturalDelta(1_001_000)).toBe('16 minutes')
    })
  })
})
