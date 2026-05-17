import {
  apnumber,
  clamp,
  fractional,
  intcomma,
  intword,
  naturaldate,
  naturaldelta,
  naturalday,
  naturalsize,
  naturaltime,
  ordinal,
  precisedelta,
  scientific,
} from '../src/index.js'

const sep = (title: string) => {
  console.log('\n' + '─'.repeat(60))
  console.log(`  ${title}`)
  console.log('─'.repeat(60))
}

const show = (caption: string, value: unknown) => {
  const tag = `  ${caption}`.padEnd(36)
  console.log(`${tag} → ${String(value)}`)
}

console.log('═'.repeat(60))
console.log('  Decifra — demonstração das 13 funções da API')
console.log('═'.repeat(60))

sep('intcomma — agrupa milhares no separador local')
show(`intcomma(1_234_567)`, intcomma(1_234_567))
show(`intcomma(1_234_567, { locale: 'pt-BR' })`, intcomma(1_234_567, { locale: 'pt-BR' }))
show(`intcomma(1234.5454, { ndigits: 2 })`, intcomma(1234.5454, { ndigits: 2 }))
show(
  `intcomma(1234.5454, { ndigits: 2, locale: 'pt-BR' })`,
  intcomma(1234.5454, { ndigits: 2, locale: 'pt-BR' }),
)

sep('intword — escala em mil/milhão/bilhão localizado')
show(`intword(123_455_913)`, intword(123_455_913))
show(`intword(123_455_913, { locale: 'pt-BR' })`, intword(123_455_913, { locale: 'pt-BR' }))
show(`intword(1_000_000, { locale: 'pt-BR' })`, intword(1_000_000, { locale: 'pt-BR' }))
show(`intword(999)`, intword(999))

sep('ordinal — sufixo ordinal (st/nd/rd/th ou º/ª)')
show(`ordinal(1)`, ordinal(1))
show(`ordinal(2)`, ordinal(2))
show(`ordinal(11)`, ordinal(11))
show(`ordinal(102)`, ordinal(102))
show(`ordinal(1, { locale: 'pt-BR' })`, ordinal(1, { locale: 'pt-BR' }))
show(
  `ordinal(1, { locale: 'pt-BR', gender: 'female' })`,
  ordinal(1, { locale: 'pt-BR', gender: 'female' }),
)

sep('apnumber — escreve dígitos 0 a 9 por extenso')
show(`apnumber(4)`, apnumber(4))
show(`apnumber(4, { locale: 'pt-BR' })`, apnumber(4, { locale: 'pt-BR' }))
show(`apnumber(10)`, apnumber(10))

sep('fractional — aproxima como fração comum')
show(`fractional(1/3)`, fractional(1 / 3))
show(`fractional(1.5)`, fractional(1.5))
show(`fractional(0.25)`, fractional(0.25))
show(`fractional(3.75)`, fractional(3.75))

sep('scientific — notação científica com expoente sobrescrito')
show(`scientific(0.3)`, scientific(0.3))
show(`scientific(500)`, scientific(500))
show(`scientific(0.3, { locale: 'pt-BR' })`, scientific(0.3, { locale: 'pt-BR' }))
show(`scientific(1.23456e-7, { precision: 3 })`, scientific(1.23456e-7, { precision: 3 }))

sep('clamp — recorta valor entre floor e ceil')
show(`clamp(0.0001, { floor: 0.01 })`, clamp(0.0001, { floor: 0.01 }))
show(
  `clamp(0.999, { ceil: 0.99, format: n => Math.round(n*100)+"%" })`,
  clamp(0.999, { ceil: 0.99, format: (n) => `${Math.round(n * 100)}%` }),
)

sep('naturalsize — tamanho de arquivo (SI / IEC / GNU)')
show(`naturalsize(1_000_000)`, naturalsize(1_000_000))
show(`naturalsize(1_000_000, { binary: true })`, naturalsize(1_000_000, { binary: true }))
show(`naturalsize(1024, { gnu: true })`, naturalsize(1024, { gnu: true }))
show(`naturalsize(0)`, naturalsize(0))
show(`naturalsize(1)`, naturalsize(1))
show(`naturalsize(1_000_000, { locale: 'pt-BR' })`, naturalsize(1_000_000, { locale: 'pt-BR' }))

sep('naturaldelta — duração na maior unidade não trivial')
show(`naturaldelta({ seconds: 1001 })`, naturaldelta({ seconds: 1001 }))
show(
  `naturaldelta({ seconds: 1001 }, { locale: 'pt-BR' })`,
  naturaldelta({ seconds: 1001 }, { locale: 'pt-BR' }),
)
show(`naturaldelta({ hours: 1 })`, naturaldelta({ hours: 1 }))
show(`naturaldelta({ days: 365 })`, naturaldelta({ days: 365 }))
show(`naturaldelta(0)`, naturaldelta(0))

sep('naturaltime — relativo a agora ("há X" / "em X")')
const past = new Date(Date.now() - 3_600_000)
const future = new Date(Date.now() + 60_000)
show(`naturaltime(1 hora atrás)`, naturaltime(past))
show(`naturaltime(1 hora atrás, pt-BR)`, naturaltime(past, { locale: 'pt-BR' }))
show(`naturaltime(1 minuto à frente, pt-BR)`, naturaltime(future, { locale: 'pt-BR' }))
show(`naturaltime({ seconds: 3 })`, naturaltime({ seconds: 3 }))

sep('naturalday — hoje / ontem / amanhã (ou data formatada)')
const today = new Date()
const yesterday = new Date(today.getTime() - 86_400_000)
const oldDay = new Date(2026, 0, 2)
show(`naturalday(hoje)`, naturalday(today))
show(`naturalday(ontem, pt-BR)`, naturalday(yesterday, { locale: 'pt-BR' }))
show(`naturalday(02/Jan/2026)`, naturalday(oldDay, { now: today }))

sep('naturaldate — como naturalday, mas com ano se necessário')
const oldDate = new Date(2007, 5, 5)
show(`naturaldate(05/Jun/2007)`, naturaldate(oldDate))
show(`naturaldate(05/Jun/2007, pt-BR)`, naturaldate(oldDate, { locale: 'pt-BR' }))
show(`naturaldate(hoje)`, naturaldate(today))

sep('precisedelta — duração detalhada em múltiplas unidades')
show(`precisedelta({ days: 2, seconds: 3633 })`, precisedelta({ days: 2, seconds: 3633 }))
show(
  `precisedelta({ days: 2, seconds: 3633 }, { locale: 'pt-BR' })`,
  precisedelta({ days: 2, seconds: 3633 }, { locale: 'pt-BR' }),
)
show(`precisedelta({ minutes: 1 })`, precisedelta({ minutes: 1 }))
show(
  `precisedelta({ seconds: 33, milliseconds: 123 }, { minimumUnit: 'millisecond' })`,
  precisedelta({ seconds: 33, milliseconds: 123 }, { minimumUnit: 'millisecond' }),
)

console.log('\n' + '═'.repeat(60))
console.log('  Fim da demonstração. Para experimentar interativamente:')
console.log('     yarn cli')
console.log('═'.repeat(60) + '\n')
