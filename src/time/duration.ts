/**
 * Duração estruturada. Anos contam 365 dias, meses contam 30 dias —
 * aproximações idênticas às do humanize Python.
 */
export interface Duration {
  years?: number
  months?: number
  weeks?: number
  days?: number
  hours?: number
  minutes?: number
  seconds?: number
  milliseconds?: number
  microseconds?: number
}

/**
 * Entrada de delta para `naturalDelta`, `naturalTime` (Duration) e
 * `preciseDelta`. `number` é interpretado como milissegundos.
 */
export type Delta = number | Duration

export const MILLISECOND = 1
export const SECOND = 1000
export const MINUTE = 60 * SECOND
export const HOUR = 60 * MINUTE
export const DAY = 24 * HOUR
export const WEEK = 7 * DAY
export const MONTH = 30 * DAY
export const YEAR = 365 * DAY

export function toMilliseconds(delta: Delta): number {
  if (typeof delta === 'number') return delta
  return (
    (delta.years ?? 0) * YEAR +
    (delta.months ?? 0) * MONTH +
    (delta.weeks ?? 0) * WEEK +
    (delta.days ?? 0) * DAY +
    (delta.hours ?? 0) * HOUR +
    (delta.minutes ?? 0) * MINUTE +
    (delta.seconds ?? 0) * SECOND +
    (delta.milliseconds ?? 0) +
    (delta.microseconds ?? 0) / 1000
  )
}
