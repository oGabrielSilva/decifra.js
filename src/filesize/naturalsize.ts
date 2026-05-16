import { resolveLocale } from '../defaults.js'
import { getLocale } from '../i18n/registry.js'
import type { LocaleId } from '../i18n/types.js'

export interface NaturalsizeOptions {
  locale?: LocaleId
  binary?: boolean
  gnu?: boolean
  format?: (value: number) => string
}

const DECIMAL_SUFFIXES = ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'] as const
const BINARY_SUFFIXES = ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'] as const
const GNU_SUFFIXES = ['K', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'] as const

export function naturalsize(value: number, opts: NaturalsizeOptions = {}): string {
  if (!Number.isFinite(value)) return String(value)

  const locale = resolveLocale(opts.locale)
  const gnu = opts.gnu ?? false
  const binary = opts.binary ?? false
  const base = gnu || binary ? 1024 : 1000

  const suffixes: readonly string[] = gnu ? GNU_SUFFIXES : binary ? BINARY_SUFFIXES : DECIMAL_SUFFIXES
  const integerFormatter = new Intl.NumberFormat(locale, { maximumFractionDigits: 0 })
  const scaledFormatter = new Intl.NumberFormat(locale, {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  })
  const format = opts.format ?? ((n: number) => scaledFormatter.format(n))

  const absBytes = Math.abs(value)
  const { byteWords } = getLocale(locale)

  if (absBytes < base) {
    if (gnu) return `${integerFormatter.format(value)}B`
    const word = absBytes === 1 ? byteWords.singular : byteWords.plural
    return `${integerFormatter.format(value)} ${word}`
  }

  let unit = base * base
  for (const suffix of suffixes) {
    if (absBytes < unit) {
      const scaled = (value * base) / unit
      return gnu ? `${format(scaled)}${suffix}` : `${format(scaled)} ${suffix}`
    }
    unit *= base
  }

  const lastSuffix = suffixes[suffixes.length - 1]!
  const scaled = (value * base) / (unit / base)
  return gnu ? `${format(scaled)}${lastSuffix}` : `${format(scaled)} ${lastSuffix}`
}
