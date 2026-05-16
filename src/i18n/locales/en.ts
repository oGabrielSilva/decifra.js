import type { LocaleStrings } from '../types.js'

const ordinalSuffixes: Record<Intl.LDMLPluralRule, string> = {
  zero: 'th',
  one: 'st',
  two: 'nd',
  few: 'rd',
  many: 'th',
  other: 'th',
}

const ordinalPlural = new Intl.PluralRules('en', { type: 'ordinal' })

export const en: LocaleStrings = {
  id: 'en',
  apnumber: ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
  byteWords: { singular: 'Byte', plural: 'Bytes' },
  time: {
    moment: 'a moment',
    microsecond: { singular: 'a microsecond', plural: 'microseconds' },
    millisecond: { singular: 'a millisecond', plural: 'milliseconds' },
    second: { singular: 'a second', plural: 'seconds' },
    minute: { singular: 'a minute', plural: 'minutes' },
    hour: { singular: 'an hour', plural: 'hours' },
    day: { singular: 'a day', plural: 'days' },
    week: { singular: 'a week', plural: 'weeks' },
    month: { singular: 'a month', plural: 'months' },
    year: { singular: 'a year', plural: 'years' },
    connector: 'and',
    separator: ', ',
  },
  intwordScales: [
    { exponent: 3, one: 'thousand', other: 'thousand' },
    { exponent: 6, one: 'million', other: 'million' },
    { exponent: 9, one: 'billion', other: 'billion' },
    { exponent: 12, one: 'trillion', other: 'trillion' },
    { exponent: 15, one: 'quadrillion', other: 'quadrillion' },
    { exponent: 18, one: 'quintillion', other: 'quintillion' },
    { exponent: 21, one: 'sextillion', other: 'sextillion' },
    { exponent: 24, one: 'septillion', other: 'septillion' },
    { exponent: 27, one: 'octillion', other: 'octillion' },
    { exponent: 30, one: 'nonillion', other: 'nonillion' },
    { exponent: 33, one: 'decillion', other: 'decillion' },
    { exponent: 100, one: 'googol', other: 'googol' },
  ],
  ordinal(value) {
    const category = ordinalPlural.select(Math.abs(value))
    return `${value}${ordinalSuffixes[category]}`
  },
}
