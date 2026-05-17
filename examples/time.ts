import { naturaldate, naturaldelta, naturalday, naturaltime, precisedelta } from 'decifra.js'

const now = new Date()
const yesterday = new Date(now.getTime() - 86_400_000)
const tomorrow = new Date(now.getTime() + 86_400_000)
const hourAgo = new Date(now.getTime() - 3_600_000)
const oldDate = new Date(2007, 5, 5)

console.log('naturaldelta:')
console.log('  1001s en:', naturaldelta({ seconds: 1001 }))
console.log('  1001s pt:', naturaldelta({ seconds: 1001 }, { locale: 'pt-BR' }))
console.log('  1h en:   ', naturaldelta({ hours: 1 }))
console.log('  1h pt:   ', naturaldelta({ hours: 1 }, { locale: 'pt-BR' }))

console.log('\nnaturaltime:')
console.log('  1h atrás en:', naturaltime(hourAgo))
console.log('  1h atrás pt:', naturaltime(hourAgo, { locale: 'pt-BR' }))

console.log('\nnaturalday:')
console.log('  hoje en:    ', naturalday(now))
console.log('  ontem pt:   ', naturalday(yesterday, { locale: 'pt-BR' }))
console.log('  amanhã pt:  ', naturalday(tomorrow, { locale: 'pt-BR' }))

console.log('\nnaturaldate:')
console.log('  data antiga en:', naturaldate(oldDate))
console.log('  data antiga pt:', naturaldate(oldDate, { locale: 'pt-BR' }))

console.log('\nprecisedelta:')
console.log('  2d + 1h + 33s en:', precisedelta({ days: 2, seconds: 3633 }))
console.log('  2d + 1h + 33s pt:', precisedelta({ days: 2, seconds: 3633 }, { locale: 'pt-BR' }))
