import { afterEach, describe, expect, it } from 'vitest'
import { setDefaultLocale } from '../../src/defaults.js'
import { naturaldate } from '../../src/time/naturaldate.js'

const NOW = new Date(2026, 4, 16, 12, 0, 0)

afterEach(() => {
  setDefaultLocale('en')
})

describe('naturaldate', () => {
  describe('en (padrão)', () => {
    it('data antiga ganha ano sem vírgula (estilo strftime)', () => {
      const old = new Date(2007, 5, 5)
      expect(naturaldate(old, { now: NOW })).toBe('Jun 05 2007')
    })

    it('data no mesmo ano sem ano', () => {
      const sameYear = new Date(2026, 2, 10)
      expect(naturaldate(sameYear, { now: NOW })).toBe('Mar 10')
    })

    it('hoje retorna a data formatada (não delega)', () => {
      expect(naturaldate(NOW, { now: NOW })).toBe('May 16')
    })

    it('ontem retorna a data formatada (não delega)', () => {
      const yesterday = new Date(2026, 4, 15)
      expect(naturaldate(yesterday, { now: NOW })).toBe('May 15')
    })

    it('amanhã retorna a data formatada (não delega)', () => {
      const tomorrow = new Date(2026, 4, 17)
      expect(naturaldate(tomorrow, { now: NOW })).toBe('May 17')
    })

    it('mais de 5 meses no mesmo ano ganha ano', () => {
      const earlier = new Date(2026, 10, 1)
      const earlyNow = new Date(2026, 2, 1)
      expect(naturaldate(earlier, { now: earlyNow })).toBe('Nov 01 2026')
    })

    it('format custom mantém vírgula do Intl', () => {
      const old = new Date(2007, 5, 5)
      expect(
        naturaldate(old, {
          now: NOW,
          format: { year: 'numeric', month: 'short', day: '2-digit' },
        }),
      ).toBe('Jun 05, 2007')
    })
  })

  describe('pt-BR', () => {
    it('data antiga com ano', () => {
      const old = new Date(2007, 5, 5)
      expect(naturaldate(old, { now: NOW, locale: 'pt-BR' })).toContain('2007')
    })

    it('hoje retorna data formatada (não delega)', () => {
      const result = naturaldate(NOW, { now: NOW, locale: 'pt-BR' })
      expect(result).not.toBe('hoje')
      expect(result).toContain('mai')
    })
  })
})
