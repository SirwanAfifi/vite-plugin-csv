# vite-plugin-csv

CSV loader for Vite

## Install

Install

```bash
yarn add vite-plugin-csv -D
```

Add it to `vite.config.js`

```ts
// vite.config.js
import CSV from "vite-plugin-csv";

export default {
  plugins: [CSV()],
};
```

## Usage

- [React example](/examples/react)
- [Vue example](/examples/vue)

## TypeScript Shim

```ts
declare module "*.csv" {}
```
