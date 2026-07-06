import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import tailwindcss from "@tailwindcss/vite";
import dotenv from 'dotenv';

// Load .env file contents into process.env
dotenv.config();

const DEV_MODE = process.env.DEV_MODE === 'true';

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
 * Initialize config according to the DEV_MODE environment variable.
 * 
 * @type {import('astro').AstroUserConfig}
 */
const config = DEV_MODE ? baseConfig : { ...baseConfig, ...webConfig };

console.log("Env: ", config);

export default defineConfig(config);
