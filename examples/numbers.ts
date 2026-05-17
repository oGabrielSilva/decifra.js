import { apNumber, clamp, fractional, intComma, intWord, ordinal, scientific } from 'decifra.js'

console.log('intComma:')
console.log('  en:    ', intComma(1_234_567))
console.log('  pt-BR: ', intComma(1_234_567, { locale: 'pt-BR' }))
console.log('  ndigits:', intComma(1234.5454, { ndigits: 2, locale: 'pt-BR' }))

console.log('\nintWord:')
console.log('  en:    ', intWord(123_455_913))
console.log('  pt-BR: ', intWord(123_455_913, { locale: 'pt-BR' }))

console.log('\nordinal:')
console.log('  en:    ', ordinal(1), ordinal(2), ordinal(11), ordinal(102))
console.log(
  '  pt-BR: ',
  ordinal(1, { locale: 'pt-BR' }),
  ordinal(1, { locale: 'pt-BR', gender: 'female' }),
)

console.log('\napNumber:')
console.log('  en:    ', apNumber(4), apNumber(9), apNumber(10))
console.log('  pt-BR: ', apNumber(4, { locale: 'pt-BR' }), apNumber(7, { locale: 'pt-BR' }))

console.log('\nfractional:')
console.log('  1/3 =', fractional(1 / 3))
console.log('  1.5 =', fractional(1.5))
console.log('  0.25 =', fractional(0.25))

console.log('\nscientific:')
console.log('  en:    ', scientific(0.3))
console.log('  pt-BR: ', scientific(0.3, { locale: 'pt-BR' }))

console.log('\nclamp:')
console.log('  <0.01: ', clamp(0.0001, { floor: 0.01 }))
console.log('  >99%:  ', clamp(0.999, { ceil: 0.99, format: (n) => `${Math.round(n * 100)}%` }))
