# Decifra

Formatação humanizada de números, datas, tamanhos e durações para JavaScript e TypeScript. pt-BR de primeira classe.

```ts
import { intcomma, naturalsize, naturaltime, setDefaultLocale } from 'decifra.js'

setDefaultLocale('pt-BR')

intcomma(1234567) // "1.234.567"
naturalsize(5_242_880, { binary: true }) // "5,0 MiB"
naturaltime(new Date(Date.now() - 180_000)) // "há 3 minutos"
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
import { intcomma, setDefaultLocale, getDefaultLocale } from 'decifra'

intcomma(1234) // "1,234"
intcomma(1234, { locale: 'pt-BR' }) // "1.234"

setDefaultLocale('pt-BR')
intcomma(1234) // "1.234"
```

## API

### Números

| Função                 | Exemplo (en)                              | Exemplo (pt-BR)                          |
| ---------------------- | ----------------------------------------- | ---------------------------------------- |
| `intcomma(n, opts?)`   | `intcomma(12345)` → `12,345`              | `intcomma(12345)` → `12.345`             |
| `intword(n, opts?)`    | `intword(123_455_913)` → `123.5 million`  | `intword(123_455_913)` → `123,5 milhões` |
| `ordinal(n, opts?)`    | `ordinal(2)` → `2nd`                      | `ordinal(2)` → `2º`                      |
| `apnumber(n, opts?)`   | `apnumber(4)` → `four`                    | `apnumber(4)` → `quatro`                 |
| `fractional(n, opts?)` | `fractional(1.5)` → `1 1/2`               | (saída é puramente numérica)             |
| `scientific(n, opts?)` | `scientific(0.3)` → `3.00 × 10⁻¹`         | `scientific(0.3)` → `3,00 × 10⁻¹`        |
| `clamp(n, opts)`       | `clamp(0.001, { floor: 0.01 })` → `<0.01` | mesmo                                    |

### Tamanho de arquivo

| Função                            | Exemplo (en)                                      | Exemplo (pt-BR)                     |
| --------------------------------- | ------------------------------------------------- | ----------------------------------- |
| `naturalsize(n, opts?)`           | `naturalsize(1_000_000)` → `1.0 MB`               | `naturalsize(1_000_000)` → `1,0 MB` |
| `naturalsize(n, opts?)` (binário) | `naturalsize(1024, { binary: true })` → `1.0 KiB` | `1,0 KiB`                           |
| `naturalsize(n, opts?)` (GNU)     | `naturalsize(1024, { gnu: true })` → `1.0K`       | `1,0K`                              |

### Tempo e data

| Função                       | Exemplo (en)                                                   | Exemplo (pt-BR)                    |
| ---------------------------- | -------------------------------------------------------------- | ---------------------------------- |
| `naturaldelta(delta, opts?)` | `{ seconds: 1001 }` → `16 minutes`                             | `{ seconds: 1001 }` → `16 minutos` |
| `naturaltime(value, opts?)`  | `1h atrás` → `an hour ago`                                     | `1h atrás` → `há uma hora`         |
| `naturalday(date, opts?)`    | `hoje` → `today`                                               | `hoje` → `hoje`                    |
| `naturaldate(date, opts?)`   | data antiga → `Jun 05, 2007`                                   | `05 de jun. de 2007`               |
| `precisedelta(delta, opts?)` | `{ days: 2, seconds: 3633 }` → `2 days, 1 hour and 33 seconds` | `2 dias, 1 hora e 33 segundos`     |

Inputs de tempo aceitam:

- `Date` (apenas `naturaltime` / `naturalday` / `naturaldate`)
- `number` (timestamp em ms para `naturaltime`/`naturalday`/`naturaldate`; duração em ms para `naturaldelta`/`precisedelta`)
- `Duration` (`{ years?, months?, weeks?, days?, hours?, minutes?, seconds?, milliseconds?, microseconds? }`)

## Inspiração

Port livre da [`humanize`](https://github.com/python-humanize/humanize) (Python), com API redesenhada para TypeScript.

## Licença

[MIT](LICENSE).
