# My Astrofolio - Personal Portfolio

Personal portfolio built with Astro 6, Vue 3, Tailwind CSS v4, and DaisyUI v5.

## Tech Stack

- **Framework:** Astro 6
- **UI Library:** Vue 3 (via `@astrojs/vue`)
- **Styling:** Tailwind CSS v4 + DaisyUI v5
- **Animations:** Swiper, Typed.js, Devicon
- **Deployment:** GitHub Pages (automatic via GitHub Actions)

## Features

- 🌐 i18n: Spanish (es) / English (en)
- 🎨 Forced dark theme with DaisyUI
- 📱 Responsive design
- ✨ Terminal animations (Typed.js)
- 🎠 Project carousel (Swiper)
- 🔤 Decode/scramble text effect
- 📧 Contact form (Formspree)
- 🚀 Automatic deployment to GitHub Pages

## Project Structure

```
/
├── public/
│   └── images/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.astro
│   │   └── vue/
│   │       ├── Card.vue
│   │       ├── Carousel.vue
│   │       ├── DecodeText.vue
│   │       ├── Skill.vue
│   │       └── Typed.vue
│   ├── i18n/
│   │   ├── data/
│   │   │   ├── es.ts
│   │   │   └── en.ts
│   │   └── messages/
│   │       ├── es.json
│   │       └── en.json
│   ├── layouts/
│   │   ├── About.astro
│   │   ├── Contact.astro
│   │   ├── Hero.astro
│   │   ├── Layout.astro
│   │   ├── Projects.astro
│   │   ├── Sections.astro
│   │   └── Skills.astro
│   ├── pages/
│   │   ├── index.astro
│   │   └── en/
│   │       └── index.astro
│   ├── styles/
│   │   └── global.css
│   ├── types/
│   │   └── global.d.ts
│   ├── utils/
│   │   ├── i18n.ts
│   │   ├── icons.ts
│   │   ├── sections.ts
│   │   └── utilities.ts
│   └── env.d.ts
├── .github/
│   └── workflows/
│       └── deploy.yml
├── package.json
├── pnpm-workspace.yaml
├── tsconfig.json
└── astro.config.mjs
```

## Commands

| Command | Description |
|:--------|:------------|
| `pnpm dev` | Local dev server at localhost:4321 |
| `pnpm build` | Production build to `./dist/` |
| `pnpm preview` | Preview production build |
| `pnpm astro` | Astro CLI |

## Environment Variables

Configure in GitHub Secrets (environment: `My-astrofolio`):

| Variable | Description |
|:---------|:------------|
| `PUBLIC_CONTACT_EMAIL` | Email for the contact form |

## Sections

- **Home:** Hero with terminal typed.js animation
- **About:** Personal info with decode effect
- **Skills:** Backend/frontend skills with Devicon icons
- **Projects:** Project carousel with Swiper
- **Contact:** Contact form via Formspree

## Deployment

The project is automatically deployed to GitHub Pages on push to `main` using GitHub Actions.

## Development

```sh
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Production build
pnpm build
```

## License

MIT
