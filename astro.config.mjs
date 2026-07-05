import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import tailwindcss from "@tailwindcss/vite";

const devMode = process.env.DEV_MODE === 'true';

/**
 * @type {import('astro').AstroUserConfig}
 */
const baseConfig = {
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
};

/**
 * @type {Pick<import('astro').AstroUserConfig, 'site' | 'base'>}
 */
const webConfig = {
    site: process.env.BASE_SITE,
    base: process.env.BASE_WEB,
}

/**
 * @type {import('astro').AstroUserConfig}
 */
const config = !devMode && webConfig.site && webConfig.base 
    ? { ...webConfig, ...baseConfig }
    : baseConfig;

export default defineConfig(config);
