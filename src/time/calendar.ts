export function startOfDayLocal(date: Date): number {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime()
}

export function calendarDayDifference(target: Date, reference: Date): number {
  const diff = startOfDayLocal(target) - startOfDayLocal(reference)
  return Math.round(diff / 86_400_000)
}
