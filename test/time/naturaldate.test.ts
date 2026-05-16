import { afterEach, describe, expect, it } from 'vitest'
import { naturaldate } from '../../src/time/naturaldate.js'
import { setDefaultLocale } from '../../src/defaults.js'

const NOW = new Date(2026, 4, 16, 12, 0, 0)

afterEach(() => {
  setDefaultLocale('en')
})

describe('naturaldate', () => {
  describe('en (padrão)', () => {
    it('data antiga ganha ano', () => {
      const old = new Date(2007, 5, 5)
      expect(naturaldate(old, { now: NOW })).toBe('Jun 05, 2007')
    })

    it('data no mesmo ano sem ano', () => {
      const sameYear = new Date(2026, 2, 10)
      expect(naturaldate(sameYear, { now: NOW })).toBe('Mar 10')
    })

    it('hoje delega para today', () => {
      expect(naturaldate(NOW, { now: NOW })).toBe('today')
    })

    it('ontem delega para yesterday', () => {
      const yesterday = new Date(2026, 4, 15)
      expect(naturaldate(yesterday, { now: NOW })).toBe('yesterday')
    })

    it('amanhã delega para tomorrow', () => {
      const tomorrow = new Date(2026, 4, 17)
      expect(naturaldate(tomorrow, { now: NOW })).toBe('tomorrow')
    })

    it('mais de 5 meses no mesmo ano ganha ano', () => {
      const earlier = new Date(2026, 10, 1)
      const earlyNow = new Date(2026, 2, 1)
      expect(naturaldate(earlier, { now: earlyNow })).toBe('Nov 01, 2026')
    })
  })

  describe('pt-BR', () => {
    it('data antiga com ano', () => {
      const old = new Date(2007, 5, 5)
      expect(naturaldate(old, { now: NOW, locale: 'pt-BR' })).toContain('2007')
    })

    it('hoje vira hoje', () => {
      expect(naturaldate(NOW, { now: NOW, locale: 'pt-BR' })).toBe('hoje')
    })
  })
})
