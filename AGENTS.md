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
- Path aliases (via `tsconfig.json`): `@components/`, `@layouts/`, `@styles/`, `@pages/`, `@assets/`, `@i18n/`, `@utils/` → `src/` subdirs.
- DaisyUI configured in CSS via `@plugin "daisyui"` (no tailwind.config), forced dark theme.
- Global types (`Section`, `Data`, `Project`, `AboutMe`, `WorkExperience`) in `src/types/global.d.ts`.
- Vue components must use `client:visible` (or other `client:` directive) to hydrate in Astro.
- Astro i18n configured with `defaultLocale: 'es'`, `prefixDefaultLocale: true`. Navbar manually links `es` → `/`, `en` → `/en`.

## i18n

- **Translation messages**: `src/i18n/messages/{es,en}.json` — loaded via `useTranslations(lang)(key)` from `@utils/i18n`.
- **Content data**: `src/i18n/data/{es,en}.ts` — exports typed `Data` objects, loaded via `useData(lang)` from `@utils/i18n`.
- Components read `Astro.currentLocale` to determine the active language.

## Key files

| File | Role |
|------|------|
| `src/pages/index.astro` | Entry point, passes `locale` to Layout + Sections |
| `src/components/vue/Typed.vue` | Terminal-styled typed.js text animation |
| `src/components/vue/Carousel.vue` | Swiper-based project carousel |
| `src/components/vue/Card.vue` | Project card with devicon skills |
| `src/components/vue/DecodeText.vue` | Scramble/decode text effect |
| `src/components/vue/Timeline.vue` | Glassmorphism timeline with scroll animations, skills badges, current job badge |
| `src/components/Navbar.astro` | Fixed top navbar with i18n language switcher |
| `src/utils/icons.ts` | Typed `devicon` integration (`IconName` type) |
| `src/styles/global.css` | Tailwind + DaisyUI + Fira Code font + background image |

## Conventions

- Indent: 4 spaces (`.editorconfig`).
- CSS via Tailwind utility classes only (no separate style files).
- Navbar is `fixed top-0` — content containers need `pt-16` to avoid overlap.
- Component naming: PascalCase `.astro` or `.vue` files.
- Type imports use Astro's generated `.astro/types.d.ts`.
