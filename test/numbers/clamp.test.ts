import { describe, expect, it } from 'vitest'
import { clamp } from '../../src/numbers/clamp.js'

describe('clamp', () => {
  it('aplica floor com token padrão', () => {
    expect(clamp(0.0001, { floor: 0.01 })).toBe('<0.01')
  })

  it('aplica ceil com format custom', () => {
    expect(clamp(0.999, { ceil: 0.99, format: (n) => `${Math.round(n * 100)}%` })).toBe('>99%')
  })

  it('dentro do range usa format', () => {
    expect(clamp(50, { floor: 0, ceil: 100, format: (n) => `${n}` })).toBe('50')
  })

  it('valor igual ao floor não recorta', () => {
    expect(clamp(0.5, { floor: 0.5 })).toBe('0.5')
  })

  it('valor igual ao ceil não recorta', () => {
    expect(clamp(0.5, { ceil: 0.5 })).toBe('0.5')
  })

  it('aceita floorToken e ceilToken customizados', () => {
    expect(clamp(0.001, { floor: 0.01, floorToken: '~' })).toBe('~0.01')
    expect(clamp(1.5, { ceil: 1, ceilToken: '>>' })).toBe('>>1')
  })

  it('sem floor nem ceil retorna format(value)', () => {
    expect(clamp(42)).toBe('42')
  })

  it('NaN passa direto', () => {
    expect(clamp(NaN, { floor: 0 })).toBe('NaN')
  })
})
