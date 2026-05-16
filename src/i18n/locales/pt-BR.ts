import type { LocaleStrings } from '../types.js'

export const ptBR: LocaleStrings = {
  id: 'pt-BR',
  apnumber: ['zero', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove'],
  byteWords: { singular: 'byte', plural: 'bytes' },
  time: {
    moment: 'um momento',
    microsecond: { singular: 'um microssegundo', plural: 'microssegundos' },
    millisecond: { singular: 'um milissegundo', plural: 'milissegundos' },
    second: { singular: 'um segundo', plural: 'segundos' },
    minute: { singular: 'um minuto', plural: 'minutos' },
    hour: { singular: 'uma hora', plural: 'horas' },
    day: { singular: 'um dia', plural: 'dias' },
    week: { singular: 'uma semana', plural: 'semanas' },
    month: { singular: 'um mês', plural: 'meses' },
    year: { singular: 'um ano', plural: 'anos' },
    today: 'hoje',
    yesterday: 'ontem',
    tomorrow: 'amanhã',
    connector: 'e',
    separator: ', ',
    past: (delta) => `há ${delta}`,
    future: (delta) => `em ${delta}`,
  },
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
