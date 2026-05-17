# Decifra

Formatação humanizada de números, datas, tamanhos e durações para JavaScript e TypeScript. pt-BR de primeira classe.

```ts
import { intComma, naturalSize, naturalTime, setDefaultLocale } from 'decifra.js'

setDefaultLocale('pt-BR')

intComma(1234567) // "1.234.567"
naturalSize(5_242_880, { binary: true }) // "5,0 MiB"
naturalTime(new Date(Date.now() - 180_000)) // "há 3 minutos"
```

## Instalação

```bash
yarn add decifra.js
```

Requer Node 18+. Apenas ESM.

## Experimentando localmente

Depois de clonar o repo e rodar `yarn install`:

- `yarn demo` percorre as 13 funções com entradas e saídas comentadas.
- `yarn cli` abre um menu interativo onde você escolhe a função e informa os argumentos.
- `yarn test:run` executa a bateria de testes.

## Locale

Toda função aceita `{ locale?: 'en' | 'pt-BR' }`. Sem opção, usa o default global (inicia em `'en'`).

```ts
import { intComma, setDefaultLocale, getDefaultLocale } from 'decifra.js'

intComma(1234) // "1,234"
intComma(1234, { locale: 'pt-BR' }) // "1.234"

setDefaultLocale('pt-BR')
intComma(1234) // "1.234"
```

## API

### Números

| Função                 | Exemplo (en)                              | Exemplo (pt-BR)                          |
| ---------------------- | ----------------------------------------- | ---------------------------------------- |
| `intComma(n, opts?)`   | `intComma(12345)` → `12,345`              | `intComma(12345)` → `12.345`             |
| `intWord(n, opts?)`    | `intWord(123_455_913)` → `123.5 million`  | `intWord(123_455_913)` → `123,5 milhões` |
| `ordinal(n, opts?)`    | `ordinal(2)` → `2nd`                      | `ordinal(2)` → `2º`                      |
| `apNumber(n, opts?)`   | `apNumber(4)` → `four`                    | `apNumber(4)` → `quatro`                 |
| `fractional(n, opts?)` | `fractional(1.5)` → `1 1/2`               | (saída é puramente numérica)             |
| `scientific(n, opts?)` | `scientific(0.3)` → `3.00 × 10⁻¹`         | `scientific(0.3)` → `3,00 × 10⁻¹`        |
| `clamp(n, opts)`       | `clamp(0.001, { floor: 0.01 })` → `<0.01` | mesmo                                    |

### Tamanho de arquivo

| Função                            | Exemplo (en)                                      | Exemplo (pt-BR)                     |
| --------------------------------- | ------------------------------------------------- | ----------------------------------- |
| `naturalSize(n, opts?)`           | `naturalSize(1_000_000)` → `1.0 MB`               | `naturalSize(1_000_000)` → `1,0 MB` |
| `naturalSize(n, opts?)` (binário) | `naturalSize(1024, { binary: true })` → `1.0 KiB` | `1,0 KiB`                           |
| `naturalSize(n, opts?)` (GNU)     | `naturalSize(1024, { gnu: true })` → `1.0K`       | `1,0K`                              |

### Tempo e data

| Função                       | Exemplo (en)                                                   | Exemplo (pt-BR)                    |
| ---------------------------- | -------------------------------------------------------------- | ---------------------------------- |
| `naturalDelta(delta, opts?)` | `{ seconds: 1001 }` → `16 minutes`                             | `{ seconds: 1001 }` → `16 minutos` |
| `naturalTime(value, opts?)`  | `1h atrás` → `an hour ago`                                     | `1h atrás` → `há uma hora`         |
| `naturalDay(date, opts?)`    | `hoje` → `today`                                               | `hoje` → `hoje`                    |
| `naturalDate(date, opts?)`   | data antiga → `Jun 05, 2007`                                   | `05 de jun. de 2007`               |
| `preciseDelta(delta, opts?)` | `{ days: 2, seconds: 3633 }` → `2 days, 1 hour and 33 seconds` | `2 dias, 1 hora e 33 segundos`     |

Inputs de tempo aceitam:

- `Date` (apenas `naturalTime` / `naturalDay` / `naturalDate`)
- `number` (timestamp em ms para `naturalTime`/`naturalDay`/`naturalDate`; duração em ms para `naturalDelta`/`preciseDelta`)
- `Duration` (`{ years?, months?, weeks?, days?, hours?, minutes?, seconds?, milliseconds?, microseconds? }`)

## Inspiração

Port livre da [`humanize`](https://github.com/python-humanize/humanize) (Python), com API redesenhada para TypeScript.

## Licença

[MIT](LICENSE).
