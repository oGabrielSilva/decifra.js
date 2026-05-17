import { naturalDate, naturalDelta, naturalDay, naturalTime, preciseDelta } from 'decifra.js'

const now = new Date()
const yesterday = new Date(now.getTime() - 86_400_000)
const tomorrow = new Date(now.getTime() + 86_400_000)
const hourAgo = new Date(now.getTime() - 3_600_000)
const oldDate = new Date(2007, 5, 5)

console.log('naturalDelta:')
console.log('  1001s en:', naturalDelta({ seconds: 1001 }))
console.log('  1001s pt:', naturalDelta({ seconds: 1001 }, { locale: 'pt-BR' }))
console.log('  1h en:   ', naturalDelta({ hours: 1 }))
console.log('  1h pt:   ', naturalDelta({ hours: 1 }, { locale: 'pt-BR' }))

console.log('\nnaturalTime:')
console.log('  1h atrás en:', naturalTime(hourAgo))
console.log('  1h atrás pt:', naturalTime(hourAgo, { locale: 'pt-BR' }))

console.log('\nnaturalDay:')
console.log('  hoje en:    ', naturalDay(now))
console.log('  ontem pt:   ', naturalDay(yesterday, { locale: 'pt-BR' }))
console.log('  amanhã pt:  ', naturalDay(tomorrow, { locale: 'pt-BR' }))

console.log('\nnaturalDate:')
console.log('  data antiga en:', naturalDate(oldDate))
console.log('  data antiga pt:', naturalDate(oldDate, { locale: 'pt-BR' }))

console.log('\npreciseDelta:')
console.log('  2d + 1h + 33s en:', preciseDelta({ days: 2, seconds: 3633 }))
console.log('  2d + 1h + 33s pt:', preciseDelta({ days: 2, seconds: 3633 }, { locale: 'pt-BR' }))
