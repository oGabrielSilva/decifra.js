import { afterEach, describe, expect, it } from 'vitest'
import { naturalsize } from '../../src/filesize/naturalsize.js'
import { setDefaultLocale } from '../../src/defaults.js'

afterEach(() => {
  setDefaultLocale('en')
})

describe('naturalsize', () => {
  describe('SI decimal (padrão)', () => {
    it('1MB com base 1000', () => {
      expect(naturalsize(1_000_000)).toBe('1.0 MB')
    })

    it('escala GB', () => {
      expect(naturalsize(1_500_000_000)).toBe('1.5 GB')
    })

    it('1 byte usa singular', () => {
      expect(naturalsize(1)).toBe('1 Byte')
    })

    it('0 bytes usa plural', () => {
      expect(naturalsize(0)).toBe('0 Bytes')
    })

    it('300 bytes', () => {
      expect(naturalsize(300)).toBe('300 Bytes')
    })

    it('negativo preserva sinal', () => {
      expect(naturalsize(-1_000_000)).toBe('-1.0 MB')
    })

    it('valor enorme escala YB', () => {
      expect(naturalsize(1e25)).toBe('10.0 YB')
    })
  })

  describe('binary (IEC)', () => {
    it('1 MB decimal vira KiB binário', () => {
      expect(naturalsize(1_000_000, { binary: true })).toBe('976.6 KiB')
    })

    it('1 KiB exato', () => {
      expect(naturalsize(1024, { binary: true })).toBe('1.0 KiB')
    })

    it('negativo binário', () => {
      expect(naturalsize(-1024, { binary: true })).toBe('-1.0 KiB')
    })
  })

  describe('GNU', () => {
    it('1024 vira 1.0K sem espaço', () => {
      expect(naturalsize(1024, { gnu: true })).toBe('1.0K')
    })

    it('bytes minúsculos viram NB sem espaço', () => {
      expect(naturalsize(500, { gnu: true })).toBe('500B')
    })

    it('escala G', () => {
      expect(naturalsize(1024 ** 3, { gnu: true })).toBe('1.0G')
    })
  })

  describe('pt-BR', () => {
    it('decimal usa vírgula', () => {
      expect(naturalsize(1_500_000, { locale: 'pt-BR' })).toBe('1,5 MB')
    })

    it('singular byte minúsculo', () => {
      expect(naturalsize(1, { locale: 'pt-BR' })).toBe('1 byte')
    })

    it('plural bytes minúsculo', () => {
      expect(naturalsize(0, { locale: 'pt-BR' })).toBe('0 bytes')
    })
  })

  describe('format custom', () => {
    it('usa format se fornecido', () => {
      expect(naturalsize(1_500_000, { format: (n) => n.toFixed(2) })).toBe('1.50 MB')
    })
  })

  describe('default global', () => {
    it('aplica setDefaultLocale', () => {
      setDefaultLocale('pt-BR')
      expect(naturalsize(1_000_000)).toBe('1,0 MB')
    })
  })

  describe('valores não finitos', () => {
    it('NaN passa', () => {
      expect(naturalsize(NaN)).toBe('NaN')
    })
  })
})
