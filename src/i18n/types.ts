export type LocaleId = 'en' | 'pt-BR'

export interface IntwordScale {
  readonly exponent: number
  readonly one: string
  readonly other: string
}

export interface LocaleStrings {
  readonly id: LocaleId
  readonly intwordScales: readonly IntwordScale[]
}
