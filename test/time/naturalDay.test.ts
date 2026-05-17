import { afterEach, describe, expect, it } from 'vitest'
import { naturalDay } from '../../src/time/naturalDay.js'
import { setDefaultLocale } from '../../src/defaults.js'

const NOW = new Date(2026, 4, 16, 12, 0, 0)

afterEach(() => {
  setDefaultLocale('en')
})

describe('naturalDay', () => {
  describe('en (padrão)', () => {
    it('hoje vira today', () => {
      expect(naturalDay(NOW, { now: NOW })).toBe('today')
    })

    it('ontem vira yesterday', () => {
      const yesterday = new Date(2026, 4, 15, 23, 0, 0)
      expect(naturalDay(yesterday, { now: NOW })).toBe('yesterday')
    })

    it('amanhã vira tomorrow', () => {
      const tomorrow = new Date(2026, 4, 17, 0, 0, 0)
      expect(naturalDay(tomorrow, { now: NOW })).toBe('tomorrow')
    })

    it('data antiga formatada como Mon DD', () => {
      const old = new Date(2026, 0, 2)
      expect(naturalDay(old, { now: NOW })).toBe('Jan 02')
    })

    it('format custom sobrescreve padrão', () => {
      const date = new Date(2024, 5, 15)
      expect(
        naturalDay(date, {
          now: NOW,
          format: { year: 'numeric', month: '2-digit', day: '2-digit' },
        }),
      ).toMatch(/06\/15\/2024|2024-06-15/)
    })
  })

  describe('pt-BR', () => {
    it('hoje', () => {
      expect(naturalDay(NOW, { now: NOW, locale: 'pt-BR' })).toBe('hoje')
    })

    it('ontem', () => {
      const yesterday = new Date(2026, 4, 15)
      expect(naturalDay(yesterday, { now: NOW, locale: 'pt-BR' })).toBe('ontem')
    })

    it('amanhã', () => {
      const tomorrow = new Date(2026, 4, 17)
      expect(naturalDay(tomorrow, { now: NOW, locale: 'pt-BR' })).toBe('amanhã')
    })

    it('data antiga formata via Intl pt-BR', () => {
      const old = new Date(2026, 0, 2)
      const result = naturalDay(old, { now: NOW, locale: 'pt-BR' })
      expect(result).toContain('jan')
      expect(result).toContain('02')
    })
  })

  describe('default global', () => {
    it('aplica setDefaultLocale', () => {
      setDefaultLocale('pt-BR')
      expect(naturalDay(NOW, { now: NOW })).toBe('hoje')
    })
  })
})
