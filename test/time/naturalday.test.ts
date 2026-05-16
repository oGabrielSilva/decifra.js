import { afterEach, describe, expect, it } from 'vitest'
import { naturalday } from '../../src/time/naturalday.js'
import { setDefaultLocale } from '../../src/defaults.js'

const NOW = new Date(2026, 4, 16, 12, 0, 0)

afterEach(() => {
  setDefaultLocale('en')
})

describe('naturalday', () => {
  describe('en (padrão)', () => {
    it('hoje vira today', () => {
      expect(naturalday(NOW, { now: NOW })).toBe('today')
    })

    it('ontem vira yesterday', () => {
      const yesterday = new Date(2026, 4, 15, 23, 0, 0)
      expect(naturalday(yesterday, { now: NOW })).toBe('yesterday')
    })

    it('amanhã vira tomorrow', () => {
      const tomorrow = new Date(2026, 4, 17, 0, 0, 0)
      expect(naturalday(tomorrow, { now: NOW })).toBe('tomorrow')
    })

    it('data antiga formatada como Mon DD', () => {
      const old = new Date(2026, 0, 2)
      expect(naturalday(old, { now: NOW })).toBe('Jan 02')
    })

    it('format custom sobrescreve padrão', () => {
      const date = new Date(2024, 5, 15)
      expect(naturalday(date, { now: NOW, format: { year: 'numeric', month: '2-digit', day: '2-digit' } })).toMatch(
        /06\/15\/2024|2024-06-15/,
      )
    })
  })

  describe('pt-BR', () => {
    it('hoje', () => {
      expect(naturalday(NOW, { now: NOW, locale: 'pt-BR' })).toBe('hoje')
    })

    it('ontem', () => {
      const yesterday = new Date(2026, 4, 15)
      expect(naturalday(yesterday, { now: NOW, locale: 'pt-BR' })).toBe('ontem')
    })

    it('amanhã', () => {
      const tomorrow = new Date(2026, 4, 17)
      expect(naturalday(tomorrow, { now: NOW, locale: 'pt-BR' })).toBe('amanhã')
    })
  })

  describe('default global', () => {
    it('aplica setDefaultLocale', () => {
      setDefaultLocale('pt-BR')
      expect(naturalday(NOW, { now: NOW })).toBe('hoje')
    })
  })
})
