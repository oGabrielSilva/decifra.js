import readline from 'node:readline/promises'
import { stdin, stdout } from 'node:process'
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
import type { LocaleId, OrdinalGender, PrecisedeltaUnit } from '../src/index.js'
import type { Duration } from '../src/time/duration.js'

const rl = readline.createInterface({ input: stdin, output: stdout })

async function ask(prompt: string): Promise<string> {
  return (await rl.question(prompt)).trim()
}

async function askNumber(prompt: string, fallback?: number): Promise<number> {
  const raw = await ask(prompt)
  if (raw === '' && fallback !== undefined) return fallback
  const parsed = Number(raw)
  if (Number.isNaN(parsed)) {
    console.log('  ✖ Valor inválido, tente de novo.')
    return askNumber(prompt, fallback)
  }
  return parsed
}

async function askLocale(): Promise<LocaleId | undefined> {
  const raw = (await ask('Locale [en, pt-BR ou enter pra default]: ')).toLowerCase()
  if (raw === '' || raw === 'default') return undefined
  if (raw === 'en') return 'en'
  if (raw === 'pt-br' || raw === 'pt') return 'pt-BR'
  console.log('  ✖ Locale inválido, usando default.')
  return undefined
}

async function askBool(prompt: string): Promise<boolean> {
  const raw = (await ask(`${prompt} (s/N): `)).toLowerCase()
  return raw === 's' || raw === 'sim' || raw === 'y' || raw === 'yes'
}

interface Command {
  name: string
  description: string
  run: () => Promise<string>
}

const commands: Command[] = [
  {
    name: 'intcomma',
    description: 'separador de milhares',
    async run() {
      const value = await askNumber('Valor: ')
      const locale = await askLocale()
      const ndigitsRaw = await ask('ndigits (enter pra omitir): ')
      const opts: Parameters<typeof intcomma>[1] = {}
      if (locale !== undefined) opts.locale = locale
      if (ndigitsRaw !== '') opts.ndigits = Number(ndigitsRaw)
      return intcomma(value, opts)
    },
  },
  {
    name: 'intword',
    description: 'escala em mil, milhão, bilhão',
    async run() {
      const value = await askNumber('Valor: ')
      const locale = await askLocale()
      const opts: Parameters<typeof intword>[1] = {}
      if (locale !== undefined) opts.locale = locale
      return intword(value, opts)
    },
  },
  {
    name: 'ordinal',
    description: 'sufixo ordinal (1st, 2º, ...)',
    async run() {
      const value = await askNumber('Valor: ')
      const locale = await askLocale()
      const genderRaw = (await ask('Gênero [male/female ou enter]: ')).toLowerCase()
      const opts: Parameters<typeof ordinal>[1] = {}
      if (locale !== undefined) opts.locale = locale
      if (genderRaw === 'male' || genderRaw === 'female') {
        opts.gender = genderRaw as OrdinalGender
      }
      return ordinal(value, opts)
    },
  },
  {
    name: 'apnumber',
    description: 'escreve 0-9 por extenso',
    async run() {
      const value = await askNumber('Valor: ')
      const locale = await askLocale()
      const opts: Parameters<typeof apnumber>[1] = {}
      if (locale !== undefined) opts.locale = locale
      return apnumber(value, opts)
    },
  },
  {
    name: 'fractional',
    description: 'fração comum aproximada',
    async run() {
      const value = await askNumber('Valor: ')
      return fractional(value)
    },
  },
  {
    name: 'scientific',
    description: 'notação científica',
    async run() {
      const value = await askNumber('Valor: ')
      const locale = await askLocale()
      const precRaw = await ask('Precisão (enter = 2): ')
      const opts: Parameters<typeof scientific>[1] = {}
      if (locale !== undefined) opts.locale = locale
      if (precRaw !== '') opts.precision = Number(precRaw)
      return scientific(value, opts)
    },
  },
  {
    name: 'clamp',
    description: 'recorta entre floor e ceil',
    async run() {
      const value = await askNumber('Valor: ')
      const floorRaw = await ask('Floor (enter pra omitir): ')
      const ceilRaw = await ask('Ceil (enter pra omitir): ')
      const opts: Parameters<typeof clamp>[1] = {}
      if (floorRaw !== '') opts.floor = Number(floorRaw)
      if (ceilRaw !== '') opts.ceil = Number(ceilRaw)
      return clamp(value, opts)
    },
  },
  {
    name: 'naturalsize',
    description: 'tamanho de arquivo',
    async run() {
      const value = await askNumber('Valor em bytes: ')
      const locale = await askLocale()
      const binary = await askBool('Binário (KiB/MiB)?')
      const gnu = !binary ? await askBool('GNU (K/M/G sem espaço)?') : false
      const opts: Parameters<typeof naturalsize>[1] = {}
      if (locale !== undefined) opts.locale = locale
      if (binary) opts.binary = true
      if (gnu) opts.gnu = true
      return naturalsize(value, opts)
    },
  },
  {
    name: 'naturaldelta',
    description: 'duração na maior unidade',
    async run() {
      const duration = await askDuration()
      const locale = await askLocale()
      const opts: Parameters<typeof naturaldelta>[1] = {}
      if (locale !== undefined) opts.locale = locale
      return naturaldelta(duration, opts)
    },
  },
  {
    name: 'naturaltime',
    description: 'relativo a agora',
    async run() {
      console.log('  Informe segundos desde agora (negativo = passado).')
      const offsetSeconds = await askNumber('Offset em segundos: ')
      const locale = await askLocale()
      const target = new Date(Date.now() + offsetSeconds * 1000)
      const opts: Parameters<typeof naturaltime>[1] = {}
      if (locale !== undefined) opts.locale = locale
      return naturaltime(target, opts)
    },
  },
  {
    name: 'naturalday',
    description: 'hoje, ontem, amanhã ou data',
    async run() {
      console.log('  Informe dias desde hoje (0 = hoje, -1 = ontem, 1 = amanhã).')
      const offsetDays = await askNumber('Offset em dias: ')
      const locale = await askLocale()
      const target = new Date()
      target.setDate(target.getDate() + offsetDays)
      const opts: Parameters<typeof naturalday>[1] = {}
      if (locale !== undefined) opts.locale = locale
      return naturalday(target, opts)
    },
  },
  {
    name: 'naturaldate',
    description: 'como naturalday, com ano se preciso',
    async run() {
      console.log('  Informe dias desde hoje (0 = hoje, -1 = ontem).')
      const offsetDays = await askNumber('Offset em dias: ')
      const locale = await askLocale()
      const target = new Date()
      target.setDate(target.getDate() + offsetDays)
      const opts: Parameters<typeof naturaldate>[1] = {}
      if (locale !== undefined) opts.locale = locale
      return naturaldate(target, opts)
    },
  },
  {
    name: 'precisedelta',
    description: 'duração detalhada',
    async run() {
      const duration = await askDuration()
      const locale = await askLocale()
      const minRaw = (await ask('minimumUnit [second/millisecond/...] (enter = second): ')).trim()
      const opts: Parameters<typeof precisedelta>[1] = {}
      if (locale !== undefined) opts.locale = locale
      if (minRaw !== '') opts.minimumUnit = minRaw as PrecisedeltaUnit
      return precisedelta(duration, opts)
    },
  },
]

async function askDuration(): Promise<Duration> {
  console.log('  Monte a duração (campos opcionais, enter pra pular):')
  const out: Duration = {}
  const fields: Array<keyof Duration> = [
    'years',
    'months',
    'weeks',
    'days',
    'hours',
    'minutes',
    'seconds',
    'milliseconds',
  ]
  for (const field of fields) {
    const raw = await ask(`    ${field}: `)
    if (raw !== '') out[field] = Number(raw)
  }
  return out
}

function printMenu(): void {
  console.log('')
  console.log('═'.repeat(60))
  console.log('  Decifra — CLI interativo')
  console.log('═'.repeat(60))
  commands.forEach((cmd, i) => {
    console.log(`  ${String(i + 1).padStart(2, ' ')}. ${cmd.name.padEnd(14)} ${cmd.description}`)
  })
  console.log(`   0. sair`)
  console.log('─'.repeat(60))
}

async function main(): Promise<void> {
  while (true) {
    printMenu()
    const choice = await ask('Escolha: ')
    if (choice === '0' || choice === 'q' || choice === 'sair') break
    const idx = Number(choice) - 1
    const cmd = commands[idx]
    if (!cmd) {
      console.log('  ✖ Opção inválida.')
      continue
    }
    console.log(`\n› ${cmd.name}`)
    try {
      const result = await cmd.run()
      console.log(`\n  Resultado: ${result}`)
    } catch (err) {
      console.log(`  ✖ Erro: ${(err as Error).message}`)
    }
  }
  rl.close()
  console.log('\nAté logo.')
}

await main()
