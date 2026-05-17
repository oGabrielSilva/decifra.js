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

## Locale

Toda função aceita `{ locale?: 'en' | 'pt-BR' }`. Sem opção, usa o default global (inicia em `'en'`).

```ts
import { intComma, setDefaultLocale } from 'decifra.js'

intComma(1234) // "1,234"
intComma(1234, { locale: 'pt-BR' }) // "1.234"

setDefaultLocale('pt-BR')
intComma(1234) // "1.234"
```

## API resumida

| Categoria | Funções |
| --- | --- |
| Números | `intComma`, `intWord`, `ordinal`, `apNumber`, `fractional`, `scientific`, `clamp` |
| Tamanho | `naturalSize` (SI, IEC binário, GNU) |
| Tempo / data | `naturalDelta`, `naturalTime`, `naturalDay`, `naturalDate`, `preciseDelta` |
| Locale | `setDefaultLocale`, `getDefaultLocale` |

**Documentação completa de cada função, opção e tipo: [`docs/API.md`](./docs/API.md).**

Gere ou atualize a doc localmente com `yarn docs` (typedoc + typedoc-plugin-markdown a partir do JSDoc do código).

## Experimentando localmente

Depois de clonar o repo e rodar `yarn install`:

- `yarn demo` percorre as 13 funções com entradas e saídas comentadas.
- `yarn cli` abre um menu interativo onde você escolhe a função e informa os argumentos.
- `yarn test:run` executa a bateria de testes.

## Changelog

Veja [`CHANGELOG.md`](./CHANGELOG.md).

## Inspiração

Port livre da [`humanize`](https://github.com/python-humanize/humanize) (Python), com API redesenhada para TypeScript.

## Licença

[MIT](LICENSE).
