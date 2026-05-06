# Andromeda — Design System Monorepo

Andromeda es un monorepo basado en Bun que contiene un sistema de diseño (Design System) completo. Proporciona una librería de componentes de React junto con un framework CSS subyacente. Está diseñado para ser escalable, modular y mantener una alta consistencia visual, utilizando herramientas modernas como React 19, Vite 8, TypeScript 6 y Storybook.

## 📦 Estructura del Proyecto

El proyecto está dividido en paquetes (`packages`) y aplicaciones (`apps`) utilizando Bun Workspaces:

### Paquetes (`packages/`)
- **`ui-react/`**: La librería principal de componentes de React. Exporta los componentes reutilizables listos para ser consumidos (en formatos CJS y ESM).
- **`css-framework/`**: El framework CSS base del sistema de diseño. Contiene todas las variables, utilidades y estilos fundamentales independientes de React.

### Aplicaciones (`apps/`)
- **`sandbox/`**: Una aplicación Vite para el entorno de desarrollo. Sirve como un "patio de juegos" para probar y validar rápidamente los componentes de `ui-react` a medida que se construyen.
- **`docs/`**: El entorno de documentación y pruebas visuales, impulsado por Storybook. Permite visualizar, interactuar y ejecutar pruebas (mediante Vitest) de todos los componentes de la librería.

## ⚡ Cómo Ejecutar el Proyecto

Para interactuar con las diferentes partes del proyecto, se utilizan los siguientes comandos con Bun:

### 1. Instalación de dependencias
Asegúrate de estar en la raíz del proyecto y ejecuta:
```bash
bun install
```

### 2. Entornos de Desarrollo
Para probar los componentes tienes dos opciones principales:

- **Ejecutar el Sandbox (Aplicación de prueba):**
  ```bash
  bun run dev:sandbox
  ```
  *Levanta el servidor de desarrollo de Vite (usualmente en `localhost:5173`).*

- **Ejecutar la Documentación (Storybook):**
  ```bash
  bun run dev:docs
  ```
  *Inicia el entorno de Storybook para ver las historias de los componentes (usualmente en `localhost:6006`).*

### 3. Construcción y Publicación
Para compilar la librería lista para producción:
```bash
bun run build:lib
```
*Compila `ui-react` y genera los archivos finales en la carpeta `dist/`.*

### 4. Calidad de Código (Linting y Formateo)
El proyecto utiliza Biome para garantizar la consistencia del código:
- **Verificar errores (Lint):**
  ```bash
  bun run lint
  ```
- **Formatear código automáticamente:**
  ```bash
  bun run format
  ```

## 🛠️ Stack Tecnológico Principal

- **Runtime & Gestor de paquetes**: Bun workspaces
- **Frontend**: React 19, Vite 8, TypeScript 6
- **Linting & Formateo**: Biome
- **Testing**: Vitest 4 + Playwright
- **Documentación**: Storybook 10
