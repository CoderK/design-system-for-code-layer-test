# design-system-for-code-layer-test

A small stand-in design system built from [shadcn/ui](https://ui.shadcn.com) (MIT).
It exists to test Figma's library code sources (Code Layers beta): connecting a
GitHub repository to a Figma library so the agent builds code layers with these
components.

## Components

All 64 shadcn/ui components live in `src/components/ui`:

accordion, alert-dialog, alert, aspect-ratio, attachment, avatar, badge, breadcrumb, bubble, button-group, button, calendar, card, carousel, chart, checkbox, code-block, collapsible, combobox, command, context-menu, dialog, direction, drawer, dropdown-menu, empty, field, hover-card, input-group, input-otp, input, item, kbd, label, marker, menubar, message-scroller, message, native-select, navigation-menu, pagination, popover, progress, questionnaire, radio-group, resizable, scroll-area, select, separator, sheet, sidebar, skeleton, slider, sonner, spinner, switch, table, tabs, textarea, toast, toggle-group, toggle, tooltip, trace

Design tokens are CSS variables in `src/index.css`.

## Scripts

```sh
npm install
npm run dev     # catalog page at http://localhost:5173
npm run build
```

`src/App.tsx` is a catalog with one page per component (`#button`, `#sidebar`, …).
The pages come from the official shadcn/ui examples in `src/catalog/examples`.
Three of them (message, message-scroller, trace) are static rewrites because the
upstream versions depend on AI SDK helpers that only exist on the shadcn site,
and direction has no upstream example. `src/catalog/shims` stands in for
`next/image` and `next/link`.
