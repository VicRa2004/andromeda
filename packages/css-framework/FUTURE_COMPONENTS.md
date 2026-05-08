# Componentes Futuros — Andromeda CSS Framework

Lista de componentes planificados para futuras versiones del framework.
Todos siguen la convención BEM y usan tokens del design system.

## Prioridad Alta

### Tabs
- `.tabs`, `.tabs__list`, `.tabs__trigger`, `.tabs__content`
- Variantes: `--underline`, `--pills`, `--bordered`
- Soporte para orientación horizontal y vertical

### Dropdown
- `.dropdown`, `.dropdown__trigger`, `.dropdown__menu`, `.dropdown__item`
- Variantes: `--sm`, `--md`, `--lg`
- Soporte para submenús anidados
- Posicionamiento automático (arriba/abajo)

### Accordion / Collapse
- `.accordion`, `.accordion__item`, `.accordion__trigger`, `.accordion__content`
- Variantes: `--bordered`, `--flush`, `--separated`
- Soporte para múltiple o único panel abierto

### Pagination
- `.pagination`, `.pagination__item`, `.pagination__link`
- Variantes: `--sm`, `--lg`, `--rounded`
- Estados: `is-active`, `is-disabled`

### Progress Bar
- `.progress`, `.progress__bar`, `.progress__label`
- Variantes: `--sm`, `--md`, `--lg`
- Colores semánticos: `--primary`, `--secondary`, `--success`, `--error`
- Soporte para indeterminado y striped

## Prioridad Media

### Breadcrumb (standalone)
- `.breadcrumb`, `.breadcrumb__item`, `.breadcrumb__link`, `.breadcrumb__separator`
- Actualmente solo como modifier de navigation, necesita componente propio

### List Group
- `.list-group`, `.list-group__item`
- Variantes: `--flush`, `--bordered`, `--interactive`
- Estados: `is-active`, `is-disabled`

### Offcanvas / Drawer
- `.drawer`, `.drawer__overlay`, `.drawer__content`, `.drawer__header`, `.drawer__body`
- Variantes: `--left`, `--right`, `--top`, `--bottom`
- Tamaños: `--sm`, `--md`, `--lg`, `--full`

### Tooltip
- `.tooltip`, `.tooltip__content`
- Posicionamiento: `--top`, `--bottom`, `--left`, `--right`
- Variantes: `--dark`, `--light`

### Popover
- `.popover`, `.popover__trigger`, `.popover__content`, `.popover__arrow`
- Similar a tooltip pero con contenido rico

## Prioridad Baja

### Skeleton
- `.skeleton`, `.skeleton--text`, `.skeleton--circle`, `--rectangle`
- Animación de loading pulse

### Steps / Stepper
- `.steps`, `.steps__item`, `.steps__indicator`, `.steps__content`
- Variantes: `--horizontal`, `--vertical`

### Tag / Chip
- `.tag`, `.tag__label`, `.tag__close`
- Similar a badge pero con acción de cierre
- Variantes: `--primary`, `--secondary`, `--outline`

### Timeline
- `.timeline`, `.timeline__item`, `.timeline__marker`, `.timeline__content`
- Variantes: `--left`, `--right`, `--alternate`

### Carousel
- `.carousel`, `.carousel__track`, `.carousel__slide`, `.carousel__nav`
- Controles prev/next e indicadores

### File Upload
- `.file-upload`, `.file-upload__dropzone`, `.file-upload__preview`
- Soporte drag & drop visual
