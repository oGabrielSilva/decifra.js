# Changelog

Todas as mudanças notáveis vão neste arquivo, no formato [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/), com versionamento [SemVer](https://semver.org/lang/pt-BR/spec/v2.0.0.html).

## [0.2.0] - 2026-05-16

### Mudou (breaking)

- **Funções renomeadas para camelCase** para alinhar com convenção JS: `intcomma` → `intComma`, `intword` → `intWord`, `apnumber` → `apNumber`, `naturalsize` → `naturalSize`, `naturaldelta` → `naturalDelta`, `naturaltime` → `naturalTime`, `naturalday` → `naturalDay`, `naturaldate` → `naturalDate`, `precisedelta` → `preciseDelta`. Tipos análogos (`IntCommaOptions`, etc.) e campos internos da `LocaleStrings` (`intWordScales`, `apNumber`) seguiram o mesmo padrão.
- Pacote npm renomeado para `decifra.js` (era `decifra`).

## [0.1.0] - 2026-05-16

Primeiro release público. Port da biblioteca `humanize` (Python) para TypeScript, com pt-BR de primeira classe.

### Adicionado

- **Números**: `intcomma`, `intword`, `ordinal`, `apnumber`, `fractional`, `scientific`, `clamp`.
- **Tamanho de arquivo**: `naturalsize` (SI, IEC binário, GNU).
- **Tempo e data**: `naturaldelta`, `naturaltime`, `naturalday`, `naturaldate`, `precisedelta`.
- **Locale**: registry com `en` e `pt-BR`, default global via `setDefaultLocale` / `getDefaultLocale`, override per-call em todas as funções.
- **Tipos**: `LocaleId`, `LocaleStrings`, `OrdinalGender`, `Duration`, `Delta`, opções por função (`IntcommaOptions`, `NaturalsizeOptions`, etc.).
- **Build**: ESM-only via `tsup`, declarações `.d.ts`, Node 18+.
