import { resolveLocale } from '../defaults.js'
import { getLocale } from '../i18n/registry.js'
import type { LocaleId } from '../i18n/types.js'
import { toMilliseconds } from './duration.js'
import type { Duration } from './duration.js'
import { naturalDelta } from './naturalDelta.js'
import type { MinimumTimeUnit } from './naturalDelta.js'

export interface NaturalTimeOptions {
  locale?: LocaleId
  now?: Date
  future?: boolean
  minimumUnit?: MinimumTimeUnit
  months?: boolean
}

/**
 * Render relative time ("an hour ago", "in a minute").
 *
 * Aceita `Date` (referência absoluta, comparada com `opts.now ?? new Date()`)
 * ou `Duration` (delta explícito; positivo = passado, ou ative `future: true`).
 * Não aceita `number` para evitar ambiguidade timestamp/delta — use
 * `new Date(timestamp)` ou `{ seconds, minutes, hours, ... }`.
 */
export function naturalTime(value: Date | Duration, opts: NaturalTimeOptions = {}): string {
  const locale = resolveLocale(opts.locale)
  const time = getLocale(locale).time

  let pastMs: number
  if (value instanceof Date) {
    const ref = (opts.now ?? new Date()).getTime()
    pastMs = ref - value.getTime()
  } else {
    pastMs = toMilliseconds(value)
    if (opts.future === true) pastMs = -pastMs
  }

  const naturalDeltaOpts: Parameters<typeof naturalDelta>[1] = { locale }
  if (opts.minimumUnit !== undefined) naturalDeltaOpts.minimumUnit = opts.minimumUnit
  if (opts.months !== undefined) naturalDeltaOpts.months = opts.months

  const deltaText = naturalDelta(Math.abs(pastMs), naturalDeltaOpts)
  return pastMs < 0 ? time.future(deltaText) : time.past(deltaText)
}
