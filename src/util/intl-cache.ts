const numberFormatters = new Map<string, Intl.NumberFormat>()
const pluralRulesCache = new Map<string, Intl.PluralRules>()
const dateTimeFormatters = new Map<string, Intl.DateTimeFormat>()

function key(locale: string, options: object): string {
  return `${locale}|${JSON.stringify(options)}`
}

export function getNumberFormat(
  locale: string,
  options: Intl.NumberFormatOptions = {},
): Intl.NumberFormat {
  const k = key(locale, options)
  let fmt = numberFormatters.get(k)
  if (!fmt) {
    fmt = new Intl.NumberFormat(locale, options)
    numberFormatters.set(k, fmt)
  }
  return fmt
}

export function getPluralRules(
  locale: string,
  options: Intl.PluralRulesOptions = {},
): Intl.PluralRules {
  const k = key(locale, options)
  let rules = pluralRulesCache.get(k)
  if (!rules) {
    rules = new Intl.PluralRules(locale, options)
    pluralRulesCache.set(k, rules)
  }
  return rules
}

export function getDateTimeFormat(
  locale: string,
  options: Intl.DateTimeFormatOptions = {},
): Intl.DateTimeFormat {
  const k = key(locale, options)
  let fmt = dateTimeFormatters.get(k)
  if (!fmt) {
    fmt = new Intl.DateTimeFormat(locale, options)
    dateTimeFormatters.set(k, fmt)
  }
  return fmt
}
