/**
 * Retorna o timestamp do início do dia no **fuso horário local** do runtime.
 * `getDate()`/`getMonth()`/`getFullYear()` usam o fuso local da máquina, então
 * a noção de "dia" é a do usuário. Para comparações em UTC, ajuste a `Date`
 * antes de passar.
 */
export function startOfDayLocal(date: Date): number {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime()
}

/**
 * Diferença em dias-calendário (local). `Math.round` é robusto às transições
 * de horário de verão, em que o intervalo entre duas meia-noites pode ser de
 * 23h ou 25h.
 */
export function calendarDayDifference(target: Date, reference: Date): number {
  const diff = startOfDayLocal(target) - startOfDayLocal(reference)
  return Math.round(diff / 86_400_000)
}
