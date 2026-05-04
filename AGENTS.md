# Andromeda — Design System Monorepo

**Monorepo Bun** con librería React + framework CSS para componentes reutilizables.

## 📦 Estructura

| Carpeta                   | Propósito                                     |
| ------------------------- | --------------------------------------------- |
| `packages/ui-react/`      | Librería React (exporta CJS + ESM)            |
| `packages/css-framework/` | CSS base del design system                    |
| `apps/sandbox/`           | Vite dev app (consume ui-react en desarrollo) |
| `apps/docs/`              | Storybook + Vitest (historias + visual tests) |

## 🛠️ Stack

- **Runtime**: Bun workspaces
- **Frontend**: React 19, Vite 8, TypeScript 6 (strict)
- **Linting**: Biome 2.4 (tabs, double-quotes)
- **Testing**: Vitest 4 + Playwright (browser tests)
- **Docs**: Storybook 10 + Vitest addon

## ⚡ Comandos Esenciales

```bash
bun run dev:sandbox      # Servidor Vite (localhost:5173)
bun run dev:docs         # Storybook dev (localhost:6006)
bun run build:lib        # Build ui-react → dist/
bun run lint             # Biome check
bun run format           # Biome format --write
```

## 📋 Convenciones

- **Imports**: Resueltos via Vite aliases en dev
- **TypeScript**: `verbatimModuleSyntax`, `moduleResolution: bundler`
- **Formato**: Tabs, double-quotes (Biome)
- **Exports**: ui-react → CJS + ESM; css-framework → CSS puro
- **Testing**: Stories → tests en `*.stories.ts` + tests en `apps/docs/vitest.config.ts`

## 🎯 Archivos Clave

- [package.json](package.json) — Scripts del workspace
- [biome.json](biome.json) — Configuración de lint/format
- [tsconfig.json](tsconfig.json) — TypeScript compartida
- [packages/ui-react/vite.config.ts](packages/ui-react/vite.config.ts) — Build config

## ✅ Para ser productivo

1. Crear componentes en `packages/ui-react/src/`
2. Exportar en `packages/ui-react/src/index.ts`
3. Documentar con Storybook en `apps/docs/stories/`
4. Testear con Vitest en las stories o `*.test.ts`
5. Usar `bun run lint` + `bun run format` antes de commit

---

**Focus**: Librería reutilizable → Storybook → Sandbox para validar → Build + publish
