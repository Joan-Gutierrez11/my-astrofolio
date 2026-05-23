# AGENTS.md

## Commands

```sh
pnpm dev       # dev server at localhost:4321
pnpm build     # build to dist/
pnpm preview   # preview production build
pnpm astro     # astro CLI (add, check, etc.)
```

No test/lint/typecheck scripts configured.

## Architecture

- **Astro 6** + **Vue 3** (via `@astrojs/vue`) + **Tailwind CSS v4** + **DaisyUI v5**
- Single page at `src/pages/index.astro` — the only route.
- Path aliases: `@components/`, `@layouts/`, `@styles/`, `@pages/`, `@assets/` → `src/` subdirs.
- DaisyUI configured in CSS via `@plugin "daisyui"` (not tailwind.config), forced dark theme.
- Global `Section` interface in `src/types/sections.d.ts` — used by Navbar props.
- Vue components must use `client:visible` (or other `client:` directive) to hydrate in Astro.

## Key files

| File | Role |
|------|------|
| `src/pages/index.astro` | Entry point, renders Sections |
| `src/components/vue/Typed.vue` | Terminal-styled typed.js text animation |
| `src/styles/global.css` | Tailwind + DaisyUI + Fira Code font |

## Conventions

- Indent: 4 spaces (`.editorconfig`).
- CSS via Tailwind utility classes only (no separate style files).
- Navbar is `fixed top-0` — content containers need `pt-16` to avoid overlap.
- Component naming: PascalCase `.astro` or `.vue` files.
- Type imports use Astro's generated `/.astro/types.d.ts`.
