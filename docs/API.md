# decifra.js

## Interfaces

### ApNumberOptions

Defined in: [numbers/apNumber.ts:5](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/numbers/apNumber.ts#L5)

#### Properties

##### locale?

```ts
optional locale?: LocaleId;
```

Defined in: [numbers/apNumber.ts:7](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/numbers/apNumber.ts#L7)

Locale a usar. Default: locale global de `setDefaultLocale`.

***

### ClampOptions

Defined in: [numbers/clamp.ts:1](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/numbers/clamp.ts#L1)

#### Properties

##### ceil?

```ts
optional ceil?: number;
```

Defined in: [numbers/clamp.ts:5](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/numbers/clamp.ts#L5)

Limite superior. Valores acima viram `ceilToken + format(ceil)`.

##### ceilToken?

```ts
optional ceilToken?: string;
```

Defined in: [numbers/clamp.ts:9](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/numbers/clamp.ts#L9)

Token prefixo quando recortado pelo `ceil`. Default `'>'`.

##### floor?

```ts
optional floor?: number;
```

Defined in: [numbers/clamp.ts:3](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/numbers/clamp.ts#L3)

Limite inferior. Valores abaixo viram `floorToken + format(floor)`.

##### floorToken?

```ts
optional floorToken?: string;
```

Defined in: [numbers/clamp.ts:7](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/numbers/clamp.ts#L7)

Token prefixo quando recortado pelo `floor`. Default `'<'`.

##### format?

```ts
optional format?: (value) => string;
```

Defined in: [numbers/clamp.ts:11](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/numbers/clamp.ts#L11)

Formatador do número. Default `String(value)`.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

###### Returns

`string`

***

### Duration

Defined in: [time/duration.ts:5](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/time/duration.ts#L5)

Duração estruturada. Anos contam 365 dias, meses contam 30 dias —
aproximações idênticas às do humanize Python.

#### Properties

##### days?

```ts
optional days?: number;
```

Defined in: [time/duration.ts:9](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/time/duration.ts#L9)

##### hours?

```ts
optional hours?: number;
```

Defined in: [time/duration.ts:10](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/time/duration.ts#L10)

##### microseconds?

```ts
optional microseconds?: number;
```

Defined in: [time/duration.ts:14](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/time/duration.ts#L14)

##### milliseconds?

```ts
optional milliseconds?: number;
```

Defined in: [time/duration.ts:13](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/time/duration.ts#L13)

##### minutes?

```ts
optional minutes?: number;
```

Defined in: [time/duration.ts:11](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/time/duration.ts#L11)

##### months?

```ts
optional months?: number;
```

Defined in: [time/duration.ts:7](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/time/duration.ts#L7)

##### seconds?

```ts
optional seconds?: number;
```

Defined in: [time/duration.ts:12](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/time/duration.ts#L12)

##### weeks?

```ts
optional weeks?: number;
```

Defined in: [time/duration.ts:8](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/time/duration.ts#L8)

##### years?

```ts
optional years?: number;
```

Defined in: [time/duration.ts:6](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/time/duration.ts#L6)

***

### FractionalOptions

Defined in: [numbers/fractional.ts:1](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/numbers/fractional.ts#L1)

#### Properties

##### maxDenominator?

```ts
optional maxDenominator?: number;
```

Defined in: [numbers/fractional.ts:3](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/numbers/fractional.ts#L3)

Limite superior do denominador na aproximação. Default `1000`.

***

### IntCommaOptions

Defined in: [numbers/intComma.ts:5](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/numbers/intComma.ts#L5)

#### Properties

##### locale?

```ts
optional locale?: LocaleId;
```

Defined in: [numbers/intComma.ts:7](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/numbers/intComma.ts#L7)

Locale a usar. Default: locale global de `setDefaultLocale`.

##### ndigits?

```ts
optional ndigits?: number;
```

Defined in: [numbers/intComma.ts:9](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/numbers/intComma.ts#L9)

Número de casas decimais (fixas). Se omitido, preserva o original.

***

### IntWordOptions

Defined in: [numbers/intWord.ts:6](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/numbers/intWord.ts#L6)

#### Properties

##### format?

```ts
optional format?: (value) => string;
```

Defined in: [numbers/intWord.ts:10](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/numbers/intWord.ts#L10)

Formatador da mantissa escalada. Default: 1 casa decimal localizada.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

###### Returns

`string`

##### locale?

```ts
optional locale?: LocaleId;
```

Defined in: [numbers/intWord.ts:8](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/numbers/intWord.ts#L8)

Locale a usar. Default: locale global de `setDefaultLocale`.

***

### LocaleStrings

Defined in: [i18n/types.ts:55](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/i18n/types.ts#L55)

#### Properties

##### apNumber

```ts
readonly apNumber: ApNumberTable;
```

Defined in: [i18n/types.ts:58](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/i18n/types.ts#L58)

##### byteWords

```ts
readonly byteWords: ByteWords;
```

Defined in: [i18n/types.ts:59](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/i18n/types.ts#L59)

##### id

```ts
readonly id: LocaleId;
```

Defined in: [i18n/types.ts:56](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/i18n/types.ts#L56)

##### intWordScales

```ts
readonly intWordScales: readonly IntWordScale[];
```

Defined in: [i18n/types.ts:57](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/i18n/types.ts#L57)

##### time

```ts
readonly time: TimeWords;
```

Defined in: [i18n/types.ts:60](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/i18n/types.ts#L60)

#### Methods

##### ordinal()

```ts
ordinal(value, gender): string;
```

Defined in: [i18n/types.ts:61](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/i18n/types.ts#L61)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `gender` | [`OrdinalGender`](#ordinalgender) |

###### Returns

`string`

***

### NaturalDateOptions

Defined in: [time/naturalDate.ts:5](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/time/naturalDate.ts#L5)

#### Properties

##### format?

```ts
optional format?: DateTimeFormatOptions;
```

Defined in: [time/naturalDate.ts:8](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/time/naturalDate.ts#L8)

##### locale?

```ts
optional locale?: LocaleId;
```

Defined in: [time/naturalDate.ts:6](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/time/naturalDate.ts#L6)

##### now?

```ts
optional now?: Date;
```

Defined in: [time/naturalDate.ts:7](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/time/naturalDate.ts#L7)

***

### NaturalDayOptions

Defined in: [time/naturalDay.ts:7](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/time/naturalDay.ts#L7)

#### Properties

##### format?

```ts
optional format?: DateTimeFormatOptions;
```

Defined in: [time/naturalDay.ts:13](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/time/naturalDay.ts#L13)

Opções de `Intl.DateTimeFormat` para datas fora de hoje/ontem/amanhã.

##### locale?

```ts
optional locale?: LocaleId;
```

Defined in: [time/naturalDay.ts:9](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/time/naturalDay.ts#L9)

Locale a usar. Default: locale global de `setDefaultLocale`.

##### now?

```ts
optional now?: Date;
```

Defined in: [time/naturalDay.ts:11](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/time/naturalDay.ts#L11)

Data de referência. Default `new Date()`. Use para testes determinísticos.

***

### NaturalDeltaOptions

Defined in: [time/naturalDelta.ts:10](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/time/naturalDelta.ts#L10)

#### Properties

##### locale?

```ts
optional locale?: LocaleId;
```

Defined in: [time/naturalDelta.ts:12](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/time/naturalDelta.ts#L12)

Locale a usar. Default: locale global de `setDefaultLocale`.

##### minimumUnit?

```ts
optional minimumUnit?: MinimumTimeUnit;
```

Defined in: [time/naturalDelta.ts:14](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/time/naturalDelta.ts#L14)

Unidade mínima a considerar. Default `'seconds'`.

##### months?

```ts
optional months?: boolean;
```

Defined in: [time/naturalDelta.ts:16](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/time/naturalDelta.ts#L16)

Quando `false`, agrupa em dias até atingir um ano. Default `true`.

***

### NaturalSizeOptions

Defined in: [filesize/naturalSize.ts:6](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/filesize/naturalSize.ts#L6)

#### Properties

##### binary?

```ts
optional binary?: boolean;
```

Defined in: [filesize/naturalSize.ts:9](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/filesize/naturalSize.ts#L9)

Usa base 1024 com sufixos IEC (`KiB`, `MiB`, ...). Default `false`.

##### format?

```ts
optional format?: (value) => string;
```

Defined in: [filesize/naturalSize.ts:16](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/filesize/naturalSize.ts#L16)

Formatador customizado da mantissa escalada. Default: 1 casa decimal.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

###### Returns

`string`

##### gnu?

```ts
optional gnu?: boolean;
```

Defined in: [filesize/naturalSize.ts:14](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/filesize/naturalSize.ts#L14)

Modo GNU: base 1024 com sufixos curtos (`K`, `M`, `G`, ...) e sem espaço
entre número e sufixo. Tem precedência sobre `binary` quando ambos `true`.

##### locale?

```ts
optional locale?: LocaleId;
```

Defined in: [filesize/naturalSize.ts:7](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/filesize/naturalSize.ts#L7)

***

### NaturalTimeOptions

Defined in: [time/naturalTime.ts:9](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/time/naturalTime.ts#L9)

#### Properties

##### future?

```ts
optional future?: boolean;
```

Defined in: [time/naturalTime.ts:12](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/time/naturalTime.ts#L12)

##### locale?

```ts
optional locale?: LocaleId;
```

Defined in: [time/naturalTime.ts:10](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/time/naturalTime.ts#L10)

##### minimumUnit?

```ts
optional minimumUnit?: MinimumTimeUnit;
```

Defined in: [time/naturalTime.ts:13](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/time/naturalTime.ts#L13)

##### months?

```ts
optional months?: boolean;
```

Defined in: [time/naturalTime.ts:14](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/time/naturalTime.ts#L14)

##### now?

```ts
optional now?: Date;
```

Defined in: [time/naturalTime.ts:11](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/time/naturalTime.ts#L11)

***

### OrdinalOptions

Defined in: [numbers/ordinal.ts:5](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/numbers/ordinal.ts#L5)

#### Properties

##### gender?

```ts
optional gender?: OrdinalGender;
```

Defined in: [numbers/ordinal.ts:9](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/numbers/ordinal.ts#L9)

Gênero do sufixo (relevante em pt-BR: `'º'` masc, `'ª'` fem). Default `'male'`.

##### locale?

```ts
optional locale?: LocaleId;
```

Defined in: [numbers/ordinal.ts:7](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/numbers/ordinal.ts#L7)

Locale a usar. Default: locale global de `setDefaultLocale`.

***

### PreciseDeltaOptions

Defined in: [time/preciseDelta.ts:19](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/time/preciseDelta.ts#L19)

#### Properties

##### format?

```ts
optional format?: (value) => string;
```

Defined in: [time/preciseDelta.ts:31](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/time/preciseDelta.ts#L31)

Formato customizado aplicado apenas ao último valor quando fracionário.

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

###### Returns

`string`

##### locale?

```ts
optional locale?: LocaleId;
```

Defined in: [time/preciseDelta.ts:21](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/time/preciseDelta.ts#L21)

Locale a usar. Default: locale global de `setDefaultLocale`.

##### minimumUnit?

```ts
optional minimumUnit?: PreciseDeltaUnit;
```

Defined in: [time/preciseDelta.ts:23](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/time/preciseDelta.ts#L23)

Unidade mínima a considerar. Default `'second'`.

##### suppress?

```ts
optional suppress?: readonly PreciseDeltaUnit[];
```

Defined in: [time/preciseDelta.ts:29](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/time/preciseDelta.ts#L29)

Unidades a omitir. Default `['week']` — humanize Python não tem semana na
hierarquia, então semanas sempre seriam absorvidas em dias. Passe `[]`
para habilitar semanas.

***

### ScientificOptions

Defined in: [numbers/scientific.ts:5](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/numbers/scientific.ts#L5)

#### Properties

##### locale?

```ts
optional locale?: LocaleId;
```

Defined in: [numbers/scientific.ts:6](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/numbers/scientific.ts#L6)

##### precision?

```ts
optional precision?: number;
```

Defined in: [numbers/scientific.ts:7](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/numbers/scientific.ts#L7)

## Type Aliases

### Delta

```ts
type Delta = number | Duration;
```

Defined in: [time/duration.ts:21](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/time/duration.ts#L21)

Entrada de delta para `naturalDelta`, `naturalTime` (Duration) e
`preciseDelta`. `number` é interpretado como milissegundos.

***

### LocaleId

```ts
type LocaleId = "en" | "pt-BR";
```

Defined in: [i18n/types.ts:1](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/i18n/types.ts#L1)

***

### MinimumTimeUnit

```ts
type MinimumTimeUnit = "microseconds" | "milliseconds" | "seconds";
```

Defined in: [time/naturalDelta.ts:8](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/time/naturalDelta.ts#L8)

***

### OrdinalGender

```ts
type OrdinalGender = "male" | "female";
```

Defined in: [i18n/types.ts:3](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/i18n/types.ts#L3)

***

### PreciseDeltaUnit

```ts
type PreciseDeltaUnit = 
  | "year"
  | "month"
  | "week"
  | "day"
  | "hour"
  | "minute"
  | "second"
  | "millisecond"
  | "microsecond";
```

Defined in: [time/preciseDelta.ts:8](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/time/preciseDelta.ts#L8)

## Functions

### apNumber()

```ts
function apNumber(value, opts?): string;
```

Defined in: [numbers/apNumber.ts:22](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/numbers/apNumber.ts#L22)

Estilo Associated Press: escreve dígitos de 0 a 9 por extenso, o resto
como string numérica. Decimais são truncados. Negativos passam direto.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | [`ApNumberOptions`](#apnumberoptions) |

#### Returns

`string`

#### Example

```ts
apNumber(4)                          // "four"
apNumber(4, { locale: 'pt-BR' })     // "quatro"
apNumber(10)                         // "10"
apNumber(-1)                         // "-1"
```

***

### clamp()

```ts
function clamp(value, opts?): string;
```

Defined in: [numbers/clamp.ts:25](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/numbers/clamp.ts#L25)

Recorta um valor entre `floor` e `ceil`. Fora dos limites, devolve o limite
formatado prefixado pelo token correspondente.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | [`ClampOptions`](#clampoptions) |

#### Returns

`string`

#### Example

```ts
clamp(0.0001, { floor: 0.01 })                                                // "<0.01"
clamp(0.999, { ceil: 0.99, format: n => `${Math.round(n * 100)}%` })          // ">99%"
clamp(0.5, { floor: 0, ceil: 1 })                                             // "0.5"
```

***

### fractional()

```ts
function fractional(value, opts?): string;
```

Defined in: [numbers/fractional.ts:18](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/numbers/fractional.ts#L18)

Aproxima um número decimal como fração comum reduzida (algoritmo de
frações contínuas, equivalente a `Fraction.limit_denominator` do Python).

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | [`FractionalOptions`](#fractionaloptions) |

#### Returns

`string`

#### Example

```ts
fractional(1 / 3)    // "1/3"
fractional(1.5)      // "1 1/2"
fractional(0.25)     // "1/4"
fractional(2)        // "2"
```

***

### getDefaultLocale()

```ts
function getDefaultLocale(): LocaleId;
```

Defined in: [defaults.ts:6](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/defaults.ts#L6)

Locale global atual. Inicia em `'en'`.

#### Returns

[`LocaleId`](#localeid)

***

### intComma()

```ts
function intComma(value, opts?): string;
```

Defined in: [numbers/intComma.ts:22](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/numbers/intComma.ts#L22)

Formata um número com separador de milhares localizado.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | [`IntCommaOptions`](#intcommaoptions) |

#### Returns

`string`

#### Example

```ts
intComma(1_234_567)                          // "1,234,567"
intComma(1_234_567, { locale: 'pt-BR' })     // "1.234.567"
intComma(1234.5454, { ndigits: 2 })          // "1,234.55"
```

***

### intWord()

```ts
function intWord(value, opts?): string;
```

Defined in: [numbers/intWord.ts:25](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/numbers/intWord.ts#L25)

Converte um número grande em texto com escala (mil, milhão, bilhão, …).
Valores abaixo de 1000 retornam como string sem escala.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | [`IntWordOptions`](#intwordoptions) |

#### Returns

`string`

#### Example

```ts
intWord(123_455_913)                        // "123.5 million"
intWord(123_455_913, { locale: 'pt-BR' })   // "123,5 milhões"
intWord(1_000_000, { locale: 'pt-BR' })     // "1,0 milhão"
intWord(999)                                // "999"
```

***

### naturalDate()

```ts
function naturalDate(value, opts?): string;
```

Defined in: [time/naturalDate.ts:23](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/time/naturalDate.ts#L23)

Formata uma data localmente, incluindo o ano quando ela está a mais de
cinco meses do `now` de referência. Diferente de `naturalDay`, sempre
retorna data formatada (não delega para "hoje" / "ontem" / "amanhã").

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` \| `Date` |
| `opts` | [`NaturalDateOptions`](#naturaldateoptions) |

#### Returns

`string`

***

### naturalDay()

```ts
function naturalDay(value, opts?): string;
```

Defined in: [time/naturalDay.ts:29](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/time/naturalDay.ts#L29)

Retorna "hoje", "ontem", "amanhã" (localizado) para datas próximas.
Caso contrário formata a data via `Intl.DateTimeFormat`.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` \| `Date` |
| `opts` | [`NaturalDayOptions`](#naturaldayoptions) |

#### Returns

`string`

#### Example

```ts
naturalDay(new Date())                                  // "today"
naturalDay(yesterday, { locale: 'pt-BR' })              // "ontem"
naturalDay(new Date(2020, 0, 2))                        // "Jan 02"
```

***

### naturalDelta()

```ts
function naturalDelta(delta, opts?): string;
```

Defined in: [time/naturalDelta.ts:32](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/time/naturalDelta.ts#L32)

Duração na maior unidade não trivial ("16 minutes", "a year", "a moment").
Não inclui prefixo de tempo relativo — para isso use `naturalTime`.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `delta` | [`Delta`](#delta) |
| `opts` | [`NaturalDeltaOptions`](#naturaldeltaoptions) |

#### Returns

`string`

#### Example

```ts
naturalDelta({ seconds: 1001 })                                         // "16 minutes"
naturalDelta({ seconds: 1001 }, { locale: 'pt-BR' })                    // "16 minutos"
naturalDelta({ hours: 1 })                                              // "an hour"
naturalDelta(0)                                                         // "a moment"
naturalDelta({ milliseconds: 4 }, { minimumUnit: 'milliseconds' })      // "4 milliseconds"
```

***

### naturalSize()

```ts
function naturalSize(value, opts?): string;
```

Defined in: [filesize/naturalSize.ts:30](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/filesize/naturalSize.ts#L30)

Tamanho de arquivo humanizado.

Valores acima de ~9 × 10¹⁵ bytes (próximo de `Number.MAX_SAFE_INTEGER`)
sofrem perda de precisão pela aritmética fp64, mas a mantissa renderizada
com 1 casa decimal mascara o erro na prática.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | [`NaturalSizeOptions`](#naturalsizeoptions) |

#### Returns

`string`

***

### naturalTime()

```ts
function naturalTime(value, opts?): string;
```

Defined in: [time/naturalTime.ts:25](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/time/naturalTime.ts#L25)

Render relative time ("an hour ago", "in a minute").

Aceita `Date` (referência absoluta, comparada com `opts.now ?? new Date()`)
ou `Duration` (delta explícito; positivo = passado, ou ative `future: true`).
Não aceita `number` para evitar ambiguidade timestamp/delta — use
`new Date(timestamp)` ou `{ seconds, minutes, hours, ... }`.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`Duration`](#duration) \| `Date` |
| `opts` | [`NaturalTimeOptions`](#naturaltimeoptions) |

#### Returns

`string`

***

### ordinal()

```ts
function ordinal(value, opts?): string;
```

Defined in: [numbers/ordinal.ts:24](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/numbers/ordinal.ts#L24)

Sufixo ordinal localizado. Decimais são truncados.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | [`OrdinalOptions`](#ordinaloptions) |

#### Returns

`string`

#### Example

```ts
ordinal(1)                                    // "1st"
ordinal(2)                                    // "2nd"
ordinal(11)                                   // "11th"
ordinal(1, { locale: 'pt-BR' })               // "1º"
ordinal(1, { locale: 'pt-BR', gender: 'female' }) // "1ª"
```

***

### preciseDelta()

```ts
function preciseDelta(delta, opts?): string;
```

Defined in: [time/preciseDelta.ts:72](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/time/preciseDelta.ts#L72)

Duração detalhada em múltiplas unidades, conectadas por separador e
conjunção localizados ("2 days, 1 hour and 33 seconds").

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `delta` | [`Delta`](#delta) |
| `opts` | [`PreciseDeltaOptions`](#precisedeltaoptions) |

#### Returns

`string`

#### Example

```ts
preciseDelta({ days: 2, seconds: 3633 })                                   // "2 days, 1 hour and 33 seconds"
preciseDelta({ days: 2, seconds: 3633 }, { locale: 'pt-BR' })              // "2 dias, 1 hora e 33 segundos"
preciseDelta({ minutes: 1 })                                               // "1 minute"
preciseDelta({ seconds: 33, ms: 123 }, { minimumUnit: 'millisecond' })     // "33 seconds and 123 milliseconds"
```

***

### scientific()

```ts
function scientific(value, opts?): string;
```

Defined in: [numbers/scientific.ts:33](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/numbers/scientific.ts#L33)

Notação científica com mantissa e expoente em sobrescrito Unicode.

Usamos `×` (U+00D7, sinal de multiplicação) em vez do `x` ASCII que o
humanize Python emite. É o glifo correto para multiplicação matemática
e é o que LaTeX, Wikipedia e a literatura científica usam. Divergência
intencional do upstream.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |
| `opts` | [`ScientificOptions`](#scientificoptions) |

#### Returns

`string`

***

### setDefaultLocale()

```ts
function setDefaultLocale(id): void;
```

Defined in: [defaults.ts:19](https://github.com/oGabrielSilva/decifra.js/blob/bf08f4134d6d687a0960a19a8f5513a8a7f1c65b/src/defaults.ts#L19)

Define o locale global, usado quando uma função não recebe `opts.locale`.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | [`LocaleId`](#localeid) |

#### Returns

`void`

#### Example

```ts
setDefaultLocale('pt-BR')
intComma(1234)  // "1.234"
```
