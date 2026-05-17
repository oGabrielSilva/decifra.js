export interface ClampOptions {
  /** Limite inferior. Valores abaixo viram `floorToken + format(floor)`. */
  floor?: number
  /** Limite superior. Valores acima viram `ceilToken + format(ceil)`. */
  ceil?: number
  /** Token prefixo quando recortado pelo `floor`. Default `'<'`. */
  floorToken?: string
  /** Token prefixo quando recortado pelo `ceil`. Default `'>'`. */
  ceilToken?: string
  /** Formatador do número. Default `String(value)`. */
  format?: (value: number) => string
}

/**
 * Recorta um valor entre `floor` e `ceil`. Fora dos limites, devolve o limite
 * formatado prefixado pelo token correspondente.
 *
 * @example
 * ```ts
 * clamp(0.0001, { floor: 0.01 })                                                // "<0.01"
 * clamp(0.999, { ceil: 0.99, format: n => `${Math.round(n * 100)}%` })          // ">99%"
 * clamp(0.5, { floor: 0, ceil: 1 })                                             // "0.5"
 * ```
 */
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
