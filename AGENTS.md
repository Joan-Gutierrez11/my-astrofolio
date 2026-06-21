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
- Single page at `src/pages/index.astro` — the only route. The `/en` version re-exports it with locale (`src/pages/en/index.astro`).
- Path aliases (via `tsconfig.json`): `@components/`, `@layouts/`, `@styles/`, `@pages/`, `@assets/`, `@i18n/`, `@utils/` → `src/` subdirs.
- DaisyUI configured in CSS via `@plugin "daisyui"` (no tailwind.config), forced dark theme.
- Global types (`Section`, `Data`, `Project`, `AboutMe`, `WorkExperience`) in `src/types/global.d.ts`.
- Vue components must use `client:visible` (or other `client:` directive) to hydrate in Astro.
- Astro i18n with `defaultLocale: 'es'`, `prefixDefaultLocale: true`. Navbar links `es` → `/`, `en` → `/en`.
- Contact form uses Formspree — set `formEndpoint` in `src/layouts/Contact.astro` to a real Formspree ID.

## i18n

- **Translation messages**: `src/i18n/messages/{es,en}.json` — loaded via `useTranslations(lang)(key)` from `@utils/i18n`.
- **Content data**: `src/i18n/data/{es,en}.ts` — exports typed `Data` objects (about, projects, experience). Loaded via `useData(lang)`.
- Components read `Astro.currentLocale` to determine active language.

## Key files

| File | Role |
|------|------|
| `src/pages/index.astro` | Entry point, passes `locale` to Layout + Sections |
| `src/pages/en/index.astro` | Re-exports index with `/en` locale |
| `src/layouts/Sections.astro` | Renders all sections from the `sections` array, wraps with Navbar |
| `src/layouts/{Hero,About,Projects,Contact}.astro` | Each section's content layout |
| `src/utils/sections.ts` | Defines the ordered `Section[]` array (Hero, About, Projects, Contact) |
| `src/components/Navbar.astro` | Fixed top navbar with i18n language switcher |
| `src/components/vue/Typed.vue` | Terminal-styled typed.js text animation (used in Hero) |
| `src/components/vue/Carousel.vue` | Swiper-based project carousel (used in Projects) |
| `src/components/vue/Card.vue` | Project card with Skill badges (used inside Carousel) |
| `src/components/vue/Skill.vue` | Devicon skill badge with tooltip (used inside Card) |
| `src/components/vue/DecodeText.vue` | Scramble/decode text effect (used in About, Projects) |
| `src/utils/icons.ts` | Typed `devicon` integration (`IconName` type) |
| `src/utils/utilities.ts` | `getNestedProperty`, `readJsonFile`, `capitalize` helpers |
| `src/styles/global.css` | Tailwind + DaisyUI + Fira Code font + background image |

## Conventions

- Indent: 4 spaces (`.editorconfig`).
- CSS via Tailwind utility classes only (no separate style files).
- Navbar is `fixed top-0` — content containers need `pt-16` to avoid overlap.
- Component naming: PascalCase `.astro` or `.vue` files.
- Type imports use Astro's generated `.astro/types.d.ts`.
- Contact form endpoint must be set in `src/layouts/Contact.astro` (`formEndpoint` variable) before deploying.
