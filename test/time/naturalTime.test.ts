import { afterEach, describe, expect, it } from 'vitest'
import { naturalTime } from '../../src/time/naturalTime.js'
import { setDefaultLocale } from '../../src/defaults.js'

const NOW = new Date('2026-05-16T12:00:00Z')

afterEach(() => {
  setDefaultLocale('en')
})

describe('naturalTime', () => {
  describe('en (padrão)', () => {
    it('1 hora atrás vira an hour ago', () => {
      const past = new Date(NOW.getTime() - 3600_000)
      expect(naturalTime(past, { now: NOW })).toBe('an hour ago')
    })

    it('1 minuto à frente vira in a minute', () => {
      const future = new Date(NOW.getTime() + 60_000)
      expect(naturalTime(future, { now: NOW })).toBe('in a minute')
    })

    it('3 segundos atrás via Duration', () => {
      expect(naturalTime({ seconds: 3 })).toBe('3 seconds ago')
    })

    it('3 segundos à frente via future flag', () => {
      expect(naturalTime({ seconds: 3 }, { future: true })).toBe('in 3 seconds')
    })

    it('1 dia atrás vira a day ago', () => {
      const past = new Date(NOW.getTime() - 86_400_000)
      expect(naturalTime(past, { now: NOW })).toBe('a day ago')
    })

    it('timestamp via new Date(ms)', () => {
      const past = new Date(NOW.getTime() - 60_000)
      expect(naturalTime(past, { now: NOW })).toBe('a minute ago')
    })
  })

  describe('pt-BR', () => {
    it('1 hora atrás vira há uma hora', () => {
      const past = new Date(NOW.getTime() - 3600_000)
      expect(naturalTime(past, { now: NOW, locale: 'pt-BR' })).toBe('há uma hora')
    })

    it('1 minuto à frente vira em um minuto', () => {
      const future = new Date(NOW.getTime() + 60_000)
      expect(naturalTime(future, { now: NOW, locale: 'pt-BR' })).toBe('em um minuto')
    })

    it('3 segundos atrás vira há 3 segundos', () => {
      expect(naturalTime({ seconds: 3 }, { locale: 'pt-BR' })).toBe('há 3 segundos')
    })
  })

  describe('default global', () => {
    it('aplica setDefaultLocale', () => {
      setDefaultLocale('pt-BR')
      const past = new Date(NOW.getTime() - 3600_000)
      expect(naturalTime(past, { now: NOW })).toBe('há uma hora')
    })
  })
})
