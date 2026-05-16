import { describe, expect, it } from 'vitest'
import { fractional } from '../../src/numbers/fractional.js'

describe('fractional', () => {
  it('1/3 fica 1/3', () => {
    expect(fractional(1 / 3)).toBe('1/3')
  })

  it('1.5 fica 1 1/2', () => {
    expect(fractional(1.5)).toBe('1 1/2')
  })

  it('0.25 fica 1/4', () => {
    expect(fractional(0.25)).toBe('1/4')
  })

  it('inteiros ficam sem fração', () => {
    expect(fractional(2)).toBe('2')
  })

  it('zero fica 0', () => {
    expect(fractional(0)).toBe('0')
  })

  it('-1.5 fica -1 1/2', () => {
    expect(fractional(-1.5)).toBe('-1 1/2')
  })

  it('-0.25 fica -1/4', () => {
    expect(fractional(-0.25)).toBe('-1/4')
  })

  it('2/3 fica 2/3', () => {
    expect(fractional(2 / 3)).toBe('2/3')
  })

  it('3.75 fica 3 3/4', () => {
    expect(fractional(3.75)).toBe('3 3/4')
  })

  it('aproxima 1.234 com denominador limitado', () => {
    const result = fractional(1.234, { maxDenominator: 100 })
    expect(result).toMatch(/^1 \d+\/\d+$/)
  })

  it('NaN fica NaN', () => {
    expect(fractional(NaN)).toBe('NaN')
  })

  it('Infinity fica Infinity', () => {
    expect(fractional(Infinity)).toBe('Infinity')
  })
})
