export interface FractionalOptions {
  maxDenominator?: number
}

export function fractional(value: number, opts: FractionalOptions = {}): string {
  if (!Number.isFinite(value)) return String(value)
  if (Number.isInteger(value)) return String(value)

  const maxDenom = opts.maxDenominator ?? 1000
  const [rawNum, rawDen] = limitDenominator(value, maxDenom)
  const divisor = gcd(Math.abs(rawNum), rawDen)
  const num = rawNum / divisor
  const den = rawDen / divisor

  if (den === 1) return String(num)

  const sign = num < 0 ? '-' : ''
  const absNum = Math.abs(num)
  const whole = Math.floor(absNum / den)
  const remainder = absNum - whole * den

  if (whole === 0) return `${sign}${remainder}/${den}`
  if (remainder === 0) return `${sign}${whole}`
  return `${sign}${whole} ${remainder}/${den}`
}

function gcd(a: number, b: number): number {
  let x = Math.abs(a)
  let y = Math.abs(b)
  while (y !== 0) {
    const tmp = y
    y = x % y
    x = tmp
  }
  return x || 1
}

function limitDenominator(value: number, maxDenom: number): [number, number] {
  const sign = value < 0 ? -1 : 1
  let x = Math.abs(value)

  let p0 = 0
  let q0 = 1
  let p1 = 1
  let q1 = 0

  while (true) {
    const a = Math.floor(x)
    const p2 = a * p1 + p0
    const q2 = a * q1 + q0

    if (q2 > maxDenom) {
      const k = Math.floor((maxDenom - q0) / q1)
      const candNum = k * p1 + p0
      const candDen = k * q1 + q0
      const target = Math.abs(value)
      const errLow = Math.abs(target - candNum / candDen)
      const errHigh = Math.abs(target - p1 / q1)
      if (errLow <= errHigh) return [sign * candNum, candDen]
      return [sign * p1, q1]
    }

    p0 = p1
    q0 = q1
    p1 = p2
    q1 = q2

    const frac = x - a
    if (frac < 1e-12) break
    x = 1 / frac
  }

  return [sign * p1, q1]
}
