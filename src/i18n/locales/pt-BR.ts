import type { LocaleStrings } from '../types.js'

export const ptBR: LocaleStrings = {
  id: 'pt-BR',
  apnumber: ['zero', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove'],
  byteWords: { singular: 'byte', plural: 'bytes' },
  intwordScales: [
    { exponent: 3, one: 'mil', other: 'mil' },
    { exponent: 6, one: 'milhão', other: 'milhões' },
    { exponent: 9, one: 'bilhão', other: 'bilhões' },
    { exponent: 12, one: 'trilhão', other: 'trilhões' },
    { exponent: 15, one: 'quatrilhão', other: 'quatrilhões' },
    { exponent: 18, one: 'quintilhão', other: 'quintilhões' },
    { exponent: 21, one: 'sextilhão', other: 'sextilhões' },
    { exponent: 24, one: 'septilhão', other: 'septilhões' },
    { exponent: 27, one: 'octilhão', other: 'octilhões' },
    { exponent: 30, one: 'nonilhão', other: 'nonilhões' },
    { exponent: 33, one: 'decilhão', other: 'decilhões' },
    { exponent: 100, one: 'googol', other: 'googols' },
  ],
  ordinal(value, gender) {
    const suffix = gender === 'female' ? 'ª' : 'º'
    return `${value}${suffix}`
  },
}
