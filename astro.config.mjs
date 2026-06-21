import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    site: 'https://Joan-Gutierrez11.github.io',
    base: '/my-astrofolio',
    integrations: [vue()],
    vite: {
        plugins: [tailwindcss()]
    },
    i18n: {
        defaultLocale: 'es',
        locales: ['es', 'en'],
        routing: {
            prefixDefaultLocale: true,
        }
    }
});
