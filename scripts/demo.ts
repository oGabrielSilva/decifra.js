import {
  apNumber,
  clamp,
  fractional,
  intComma,
  intWord,
  naturalDate,
  naturalDelta,
  naturalDay,
  naturalSize,
  naturalTime,
  ordinal,
  preciseDelta,
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

sep('intComma — agrupa milhares no separador local')
show(`intComma(1_234_567)`, intComma(1_234_567))
show(`intComma(1_234_567, { locale: 'pt-BR' })`, intComma(1_234_567, { locale: 'pt-BR' }))
show(`intComma(1234.5454, { ndigits: 2 })`, intComma(1234.5454, { ndigits: 2 }))
show(
  `intComma(1234.5454, { ndigits: 2, locale: 'pt-BR' })`,
  intComma(1234.5454, { ndigits: 2, locale: 'pt-BR' }),
)

sep('intWord — escala em mil/milhão/bilhão localizado')
show(`intWord(123_455_913)`, intWord(123_455_913))
show(`intWord(123_455_913, { locale: 'pt-BR' })`, intWord(123_455_913, { locale: 'pt-BR' }))
show(`intWord(1_000_000, { locale: 'pt-BR' })`, intWord(1_000_000, { locale: 'pt-BR' }))
show(`intWord(999)`, intWord(999))

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

sep('apNumber — escreve dígitos 0 a 9 por extenso')
show(`apNumber(4)`, apNumber(4))
show(`apNumber(4, { locale: 'pt-BR' })`, apNumber(4, { locale: 'pt-BR' }))
show(`apNumber(10)`, apNumber(10))

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

sep('naturalSize — tamanho de arquivo (SI / IEC / GNU)')
show(`naturalSize(1_000_000)`, naturalSize(1_000_000))
show(`naturalSize(1_000_000, { binary: true })`, naturalSize(1_000_000, { binary: true }))
show(`naturalSize(1024, { gnu: true })`, naturalSize(1024, { gnu: true }))
show(`naturalSize(0)`, naturalSize(0))
show(`naturalSize(1)`, naturalSize(1))
show(`naturalSize(1_000_000, { locale: 'pt-BR' })`, naturalSize(1_000_000, { locale: 'pt-BR' }))

sep('naturalDelta — duração na maior unidade não trivial')
show(`naturalDelta({ seconds: 1001 })`, naturalDelta({ seconds: 1001 }))
show(
  `naturalDelta({ seconds: 1001 }, { locale: 'pt-BR' })`,
  naturalDelta({ seconds: 1001 }, { locale: 'pt-BR' }),
)
show(`naturalDelta({ hours: 1 })`, naturalDelta({ hours: 1 }))
show(`naturalDelta({ days: 365 })`, naturalDelta({ days: 365 }))
show(`naturalDelta(0)`, naturalDelta(0))

sep('naturalTime — relativo a agora ("há X" / "em X")')
const past = new Date(Date.now() - 3_600_000)
const future = new Date(Date.now() + 60_000)
show(`naturalTime(1 hora atrás)`, naturalTime(past))
show(`naturalTime(1 hora atrás, pt-BR)`, naturalTime(past, { locale: 'pt-BR' }))
show(`naturalTime(1 minuto à frente, pt-BR)`, naturalTime(future, { locale: 'pt-BR' }))
show(`naturalTime({ seconds: 3 })`, naturalTime({ seconds: 3 }))

sep('naturalDay — hoje / ontem / amanhã (ou data formatada)')
const today = new Date()
const yesterday = new Date(today.getTime() - 86_400_000)
const oldDay = new Date(2026, 0, 2)
show(`naturalDay(hoje)`, naturalDay(today))
show(`naturalDay(ontem, pt-BR)`, naturalDay(yesterday, { locale: 'pt-BR' }))
show(`naturalDay(02/Jan/2026)`, naturalDay(oldDay, { now: today }))

sep('naturalDate — como naturalDay, mas com ano se necessário')
const oldDate = new Date(2007, 5, 5)
show(`naturalDate(05/Jun/2007)`, naturalDate(oldDate))
show(`naturalDate(05/Jun/2007, pt-BR)`, naturalDate(oldDate, { locale: 'pt-BR' }))
show(`naturalDate(hoje)`, naturalDate(today))

sep('preciseDelta — duração detalhada em múltiplas unidades')
show(`preciseDelta({ days: 2, seconds: 3633 })`, preciseDelta({ days: 2, seconds: 3633 }))
show(
  `preciseDelta({ days: 2, seconds: 3633 }, { locale: 'pt-BR' })`,
  preciseDelta({ days: 2, seconds: 3633 }, { locale: 'pt-BR' }),
)
show(`preciseDelta({ minutes: 1 })`, preciseDelta({ minutes: 1 }))
show(
  `preciseDelta({ seconds: 33, milliseconds: 123 }, { minimumUnit: 'millisecond' })`,
  preciseDelta({ seconds: 33, milliseconds: 123 }, { minimumUnit: 'millisecond' }),
)

console.log('\n' + '═'.repeat(60))
console.log('  Fim da demonstração. Para experimentar interativamente:')
console.log('     yarn cli')
console.log('═'.repeat(60) + '\n')
