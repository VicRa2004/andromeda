# Guía de Instalación Privada para Andromeda

Dado que los paquetes de **Andromeda** (`@andromeda/ui-react` y `@andromeda/css-framework`) son de uso interno y no deben publicarse en el registro público de npm, existen varias estrategias para consumirlos en otros proyectos de la empresa.

A continuación, se detallan las tres opciones principales, desde la más recomendada para escalar hasta las más sencillas para implementaciones rápidas.

---

## Opción 1: Registro de Paquetes Privado (Recomendado)

La forma más profesional y escalable de manejar paquetes internos es utilizar un registro privado. Plataformas como **GitHub Packages**, **GitLab Package Registry**, o **AWS CodeArtifact** (e incluso **Verdaccio** para un registro auto-alojado) permiten publicar paquetes de manera segura y privada.

### Pasos Generales:

1. **Configurar el Scope:**
   En los `package.json` de `ui-react` y `css-framework`, asegurarse de que el nombre incluye el scope de la empresa (actualmente `@andromeda/...`).
2. **Autenticación del Registro:**
   Configurar un archivo `.npmrc` en la raíz del proyecto para apuntar al registro privado:
   ```ini
   @andromeda:registry=https://npm.pkg.github.com/
   //npm.pkg.github.com/:_authToken=TU_TOKEN_DE_ACCESO_PERSONAL
   ```
3. **Publicación:**
   Después de compilar (`bun run build:lib`), publicar los paquetes desde sus respectivas carpetas:
   ```bash
   cd packages/ui-react
   bun publish
   ```
4. **Consumo en otro proyecto:**
   En el proyecto consumidor, configuras el `.npmrc` igual que en el paso 2 y luego instalas la dependencia de forma exacta:
   ```bash
   bun add -E @andromeda/ui-react @andromeda/css-framework
   ```

---

## Opción 2: Instalación vía Tarball (`.tgz`)

Si no quieres lidiar con registros privados todavía, puedes empaquetar los módulos en archivos comprimidos y compartirlos (o guardarlos en un servidor interno o bucket).

### Pasos Generales:

1. **Construir el paquete:**
   Primero compila la librería.
   ```bash
   bun run build:lib
   ```
2. **Empaquetar:**
   Navega a la carpeta del paquete y crea el tarball (Bun usa el comando de empaquetado de npm o puedes usar `npm pack`).
   ```bash
   cd packages/ui-react
   npm pack
   ```
   Esto generará un archivo similar a `andromeda-ui-react-1.0.0.tgz`. Haz lo mismo para el `css-framework`.
3. **Consumo en otro proyecto:**
   Copia los archivos `.tgz` a tu proyecto destino (por ejemplo, en una carpeta `libs/`) e instálalos usando Bun indicando la ruta del archivo:
   ```bash
   bun add -E ./libs/andromeda-ui-react-1.0.0.tgz
   bun add -E ./libs/andromeda-css-framework-1.0.0.tgz
   ```

---

## Opción 3: Consumo directo vía Repositorio Git

Algunos gestores de paquetes permiten instalar directamente desde un repositorio de Git. Sin embargo, dado que Andromeda es un **monorepo**, esta aproximación requiere gestores modernos que soporten directorios específicos dentro del repo, o utilizar la funcionalidad de *workspaces* junto con submódulos.

### Opción 3A: Submódulos + Workspaces (Monorepo a Monorepo)

Si el proyecto destino también es un monorepo, puedes integrar Andromeda como un submódulo de Git.

1. Añadir el monorepo Andromeda como submódulo en el proyecto consumidor:
   ```bash
   git submodule add git@github.com:TuEmpresa/andromeda.git packages/andromeda
   ```
2. En tu proyecto consumidor, añade las rutas al workspace en tu `package.json`:
   ```json
   {
     "workspaces": [
       "packages/*",
       "packages/andromeda/packages/*"
     ]
   }
   ```
3. Luego, podrás referenciarlos en tus apps como `workspace:*`:
   ```bash
   bun add -E @andromeda/ui-react@workspace:*
   ```

### Opción 3B: Instalación de un subdirectorio vía URL de Git (Bun/Yarn v2+)

Bun soporta la instalación de dependencias directamente de un subdirectorio en un repositorio git.

```bash
bun add -E git+ssh://git@github.com:TuEmpresa/andromeda.git#workspace=@andromeda/ui-react
```
*Nota: Esta opción requiere que el proyecto no dependa de un paso de build complejo antes de ser consumido, o que los archivos construidos (`dist/`) se hagan commit en el repositorio, lo cual no es una buena práctica general, pero sirve como solución rápida.*

---

## Resumen y Recomendación

Para un entorno empresarial:
* **Mejor Práctica a Largo Plazo:** **Opción 1 (Registro Privado)**. Mantiene el control de versiones, simplifica las instalaciones (`bun add -E @andromeda/ui-react`) y funciona a la perfección en pipelines de CI/CD.
* **Solución Rápida sin Infraestructura:** **Opción 2 (Tarball)**. Útil para compartir código rápidamente sin dependencias de red, aunque el control de versiones manual puede ser tedioso.

Para la **Opción 1**, solo asegúrate de añadir siempre la bandera `-E` al usar Bun, como dictan nuestras reglas internas de desarrollo:
`bun add -E @andromeda/ui-react`
