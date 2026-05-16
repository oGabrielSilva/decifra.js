# Decifra

Formatação humanizada de números, datas, tamanhos e durações para JavaScript e TypeScript. pt-BR de primeira classe.

```ts
import { intcomma, naturalsize, naturaltime } from 'decifra'

intcomma(1234567)            // "1.234.567"
naturalsize(5_242_880)       // "5,0 MB"
naturaltime(new Date(...))   // "há 3 minutos"
```

> Status: pré-alpha. API em desenho.

## Instalação

```bash
yarn add decifra
```

## Inspiração

Port livre da [`humanize`](https://github.com/python-humanize/humanize) (Python), com API redesenhada para TypeScript.

## Licença

[MIT](LICENSE).
