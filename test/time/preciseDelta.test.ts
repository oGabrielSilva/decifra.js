import { afterEach, describe, expect, it } from 'vitest'
import { preciseDelta } from '../../src/time/preciseDelta.js'
import { setDefaultLocale } from '../../src/defaults.js'

afterEach(() => {
  setDefaultLocale('en')
})

describe('preciseDelta', () => {
  describe('en (padrão)', () => {
    it('2 dias + 1h + 33s', () => {
      expect(preciseDelta({ days: 2, seconds: 3633 })).toBe('2 days, 1 hour and 33 seconds')
    })

    it('60 segundos vira 1 minute', () => {
      expect(preciseDelta({ seconds: 60 })).toBe('1 minute')
    })

    it('2 minutos exatos', () => {
      expect(preciseDelta({ minutes: 2 })).toBe('2 minutes')
    })

    it('1 segundo', () => {
      expect(preciseDelta({ seconds: 1 })).toBe('1 second')
    })

    it('inclui milissegundos quando minimumUnit permite', () => {
      expect(preciseDelta({ seconds: 33, milliseconds: 123 }, { minimumUnit: 'millisecond' })).toBe(
        '33 seconds and 123 milliseconds',
      )
    })

    it('zero ms vira 0 seconds', () => {
      expect(preciseDelta(0)).toBe('0 seconds')
    })

    it('suppress pula unidade', () => {
      expect(preciseDelta({ seconds: 3633 }, { suppress: ['second'] })).toBe(
        '1 hour and 0.55 minutes',
      )
    })

    it('format custom aplicado ao fracionário', () => {
      expect(preciseDelta({ minutes: 1, seconds: 30.5 }, { format: (n) => n.toFixed(1) })).toBe(
        '1 minute and 30.5 seconds',
      )
    })

    it('microssegundos sem drift de ponto flutuante', () => {
      expect(
        preciseDelta(
          { milliseconds: 1, microseconds: 234 },
          { minimumUnit: 'microsecond' },
        ),
      ).toBe('1 millisecond and 234 microseconds')
    })
  })

  describe('pt-BR', () => {
    it('2 dias 1 hora 33 segundos', () => {
      expect(preciseDelta({ days: 2, seconds: 3633 }, { locale: 'pt-BR' })).toBe(
        '2 dias, 1 hora e 33 segundos',
      )
    })

    it('1 minuto singular', () => {
      expect(preciseDelta({ minutes: 1 }, { locale: 'pt-BR' })).toBe('1 minuto')
    })

    it('33,12 segundos com vírgula decimal', () => {
      expect(preciseDelta({ seconds: 33.12 }, { locale: 'pt-BR', minimumUnit: 'second' })).toBe(
        '33,12 segundos',
      )
    })
  })

  describe('default global', () => {
    it('aplica setDefaultLocale', () => {
      setDefaultLocale('pt-BR')
      expect(preciseDelta({ minutes: 1 })).toBe('1 minuto')
    })
  })
})
