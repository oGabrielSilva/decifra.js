export type LocaleId = 'en' | 'pt-BR'

export type OrdinalGender = 'male' | 'female'

export interface IntwordScale {
  readonly exponent: number
  readonly one: string
  readonly other: string
}

export type ApNumberTable = readonly [
  string, string, string, string, string,
  string, string, string, string, string,
]

export interface ByteWords {
  readonly singular: string
  readonly plural: string
}

export interface UnitWords {
  readonly singular: string
  readonly plural: string
}

export interface TimeWords {
  readonly moment: string
  readonly microsecond: UnitWords
  readonly millisecond: UnitWords
  readonly second: UnitWords
  readonly minute: UnitWords
  readonly hour: UnitWords
  readonly day: UnitWords
  readonly week: UnitWords
  readonly month: UnitWords
  readonly year: UnitWords
  readonly connector: string
  readonly separator: string
  past(delta: string): string
  future(delta: string): string
}

export interface LocaleStrings {
  readonly id: LocaleId
  readonly intwordScales: readonly IntwordScale[]
  readonly apnumber: ApNumberTable
  readonly byteWords: ByteWords
  readonly time: TimeWords
  ordinal(value: number, gender: OrdinalGender): string
}
