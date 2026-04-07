# Boulder Playground

This project is only a playground for testing and visually validating `boulder-ui` components.

It is not intended to be a production application. The goal is to provide a fast environment to:

- try component compositions
- validate styles and interactions
- test states such as alerts, popups, modals, tabs, and toasts
- experiment with custom components built on top of `boulder-ui`

## Stack

- React
- TypeScript
- Vite
- `boulder-ui`
- `react-leaflet`

## Run locally

```bash
npm install
npm run dev
```

## Available scripts

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## Notes

- This repository is meant for experiments and UI validation.
- The screens may change frequently as component tests evolve.
- Custom components in `src/components` are used to keep the playground organized while testing `boulder-ui`.
