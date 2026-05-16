import { resolveLocale } from '../defaults.js'
import { getLocale } from '../i18n/registry.js'
import type { LocaleId } from '../i18n/types.js'
import { toMilliseconds } from './duration.js'
import type { Delta, Duration } from './duration.js'
import { naturaldelta } from './naturaldelta.js'
import type { MinimumTimeUnit } from './naturaldelta.js'

export interface NaturalTimeOptions {
  locale?: LocaleId
  now?: Date
  future?: boolean
  minimumUnit?: MinimumTimeUnit
  months?: boolean
}

export function naturaltime(
  value: Date | number | Duration,
  opts: NaturalTimeOptions = {},
): string {
  const locale = resolveLocale(opts.locale)
  const time = getLocale(locale).time

  let pastMs: number
  if (value instanceof Date) {
    const ref = (opts.now ?? new Date()).getTime()
    pastMs = ref - value.getTime()
  } else if (typeof value === 'number') {
    const ref = (opts.now ?? new Date()).getTime()
    pastMs = ref - value
  } else {
    pastMs = toMilliseconds(value as Delta)
    if (opts.future === true) pastMs = -pastMs
  }

  const naturalDeltaOpts: Parameters<typeof naturaldelta>[1] = { locale }
  if (opts.minimumUnit !== undefined) naturalDeltaOpts.minimumUnit = opts.minimumUnit
  if (opts.months !== undefined) naturalDeltaOpts.months = opts.months

  const deltaText = naturaldelta(Math.abs(pastMs), naturalDeltaOpts)
  return pastMs < 0 ? time.future(deltaText) : time.past(deltaText)
}
