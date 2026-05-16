export type LocaleId = 'en' | 'pt-BR'

export type OrdinalGender = 'male' | 'female'

export interface IntwordScale {
  readonly exponent: number
  readonly one: string
  readonly other: string
}

export interface LocaleStrings {
  readonly id: LocaleId
  readonly intwordScales: readonly IntwordScale[]
  ordinal(value: number, gender: OrdinalGender): string
}
