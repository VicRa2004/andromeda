# @andromeda/ui-react

React component library for the Andromeda design system.

## Installation

```bash
npm install @andromeda/ui-react @andromeda/css-framework
```

## Components

- `Button` - Primary call-to-action button component

## Usage

```typescript
import { Button } from "@andromeda/ui-react";
import "@andromeda/css-framework";

export function MyComponent() {
  return <Button primary label="Click me" />;
}
```

## Development

```bash
npm run build  # Build the library
npm run test   # Run tests with Vitest
```
