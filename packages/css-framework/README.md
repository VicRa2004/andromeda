# @andromeda/css-framework

Core CSS framework for the **Andromeda Design System**. Un framework moderno, elegante y profesional compatible con React y HTML puro.

## Features

- 🎨 **Paleta de colores extendida** — Primario (blue) + Secundario (violet) con 9 niveles cada uno
- 🌙 **Dark mode** automático via `data-theme="dark"`
- 🔤 **Tipografía premium** — Inter (body) + Outfit (headings)
- 📐 **Sistema de layout** — Container, Grid 12-col, Stack
- 🧩 **18 componentes BEM** — Button, Card, Modal, Input, Table, etc.
- ⚡ **300+ utility classes** — Spacing, flex, sizing, effects, responsive
- ♿ **Accesible** — Focus rings, `prefers-reduced-motion`, `sr-only`
- 📦 **CSS Layers** — Cascade organizada: `reset → tokens → base → layout → components → utilities`

## Installation

```bash
bun add -E @andromeda/css-framework
```

## Quick Start

### React

```tsx
import "@andromeda/css-framework";

function App() {
  return (
    <button className="button button--primary button--lg">
      Click me
    </button>
  );
}
```

### HTML

```html
<link rel="stylesheet" href="node_modules/@andromeda/css-framework/src/index.css">

<button class="button button--primary button--lg">
  Click me
</button>
```

### Selective imports

```tsx
// Only tokens + specific components
import "@andromeda/css-framework/tokens";
import "@andromeda/css-framework/components/button";
import "@andromeda/css-framework/components/card";
```

## Dark Mode

Add `data-theme="dark"` to `<html>`:

```html
<html data-theme="dark">
```

All tokens automatically adjust for dark backgrounds.

## Design Tokens

### Colors

| Token | Light | Dark |
|-------|-------|------|
| `--ds-color-primary` | `#2563eb` | `#3b82f6` |
| `--ds-color-secondary` | `#7c3aed` | `#8b5cf6` |
| `--ds-color-background` | gray-50 | gray-950 |
| `--ds-color-surface` | gray-100 | gray-900 |
| `--ds-color-text` | gray-900 | gray-50 |

Extended palettes: `--ds-color-primary-50` through `--ds-color-primary-900`

### Typography

| Token | Value |
|-------|-------|
| `--ds-font-family-base` | Inter + system fallback |
| `--ds-font-family-display` | Outfit + system fallback |
| `--ds-font-size-xs` to `--ds-font-size-5xl` | 0.75rem to 3.75rem |

### Spacing

4px base unit: `--ds-space-1` (4px) through `--ds-space-16` (64px)

## Components

All components follow BEM methodology:

```html
<!-- Button -->
<button class="button button--primary">Primary</button>
<button class="button button--secondary">Secondary</button>
<button class="button button--outline">Outline</button>
<button class="button button--ghost">Ghost</button>

<!-- Card -->
<div class="card card--elevated">
  <div class="card__header">
    <h3 class="card__title">Title</h3>
  </div>
  <div class="card__body">Content</div>
  <div class="card__footer">
    <button class="button button--primary">Action</button>
  </div>
</div>

<!-- Input -->
<div class="input">
  <label class="input__label">Email</label>
  <input class="input__field" type="email" placeholder="you@example.com">
</div>

<!-- Alert -->
<div class="alert alert--success">
  <div class="alert__content">
    <div class="alert__title">Success</div>
    <div class="alert__description">Operation completed.</div>
  </div>
</div>
```

## Utility Classes

### Spacing
`p-{0-16}`, `px-*`, `py-*`, `pt-*`, `pb-*`, `pl-*`, `pr-*`, `m-*`, `mx-auto`

### Flexbox
`flex`, `flex-col`, `items-center`, `justify-between`, `gap-{0-12}`, `flex-wrap`, `order-{1-12}`

### Sizing
`w-full`, `w-1/2`, `h-screen`, `min-h-dvh`, `max-w-prose`, `aspect-video`

### Typography
`text-{xs-5xl}`, `font-{normal,medium,semibold,bold}`, `uppercase`, `truncate`, `text-muted`

### Effects
`rounded-{none,sm,md,lg,xl,full}`, `shadow-{none,xs,sm,md,lg,xl}`, `opacity-{0-100}`, `bg-*`

### Responsive Prefixes
`sm:`, `md:`, `lg:`, `xl:`, `xxl:` — Apply at breakpoints 640/768/1024/1280/1536px

## Customization

Override tokens in your own CSS:

```css
:root {
  --ds-color-primary: #your-brand-color;
  --ds-color-secondary: #your-accent-color;
  --ds-font-family-base: "Your Font", sans-serif;
}
```

## Build

Generate bundled output:

```bash
cd packages/css-framework
bun run build
# → dist/andromeda.css + dist/andromeda.min.css
```
