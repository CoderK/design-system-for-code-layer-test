# design-system-for-code-layer-test

A small stand-in design system built from [shadcn/ui](https://ui.shadcn.com) (MIT).
It exists to test Figma's library code sources (Code Layers beta): connecting a
GitHub repository to a Figma library so the agent builds code layers with these
components.

## Components

All components live in `src/components/ui`:

avatar, badge, button, card, checkbox, dialog, input, label, select, separator,
switch, tabs

Design tokens are CSS variables in `src/index.css`.

## Scripts

```sh
npm install
npm run dev     # catalog page at http://localhost:5173
npm run build
```

`src/App.tsx` renders every component on one catalog page.
