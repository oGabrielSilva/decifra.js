export interface ClampOptions {
  floor?: number
  ceil?: number
  floorToken?: string
  ceilToken?: string
  format?: (value: number) => string
}

export function clamp(value: number, opts: ClampOptions = {}): string {
  if (!Number.isFinite(value)) return String(value)

  const format = opts.format ?? ((n: number) => String(n))
  const floorToken = opts.floorToken ?? '<'
  const ceilToken = opts.ceilToken ?? '>'

  if (opts.floor !== undefined && value < opts.floor) {
    return `${floorToken}${format(opts.floor)}`
  }
  if (opts.ceil !== undefined && value > opts.ceil) {
    return `${ceilToken}${format(opts.ceil)}`
  }
  return format(value)
}
