import { getNestedProperty, readJsonFile } from "@utils/utilities";

/**
 * Default language to fall back to if the requested language file doesn't exist.
 */
const defaultLang = 'es';

/**
 * Load the messages for the given language. 
 * If the language file doesn't exist, it will return an empty object.
 */
async function readLocationFile(lang: string = 'es', folder: string = 'messages'): Promise<Record<string, any>> {
    return readJsonFile(`i18n/${folder}/${lang}.json`);
}

/**
 * An object that holds the translations for each supported language.
 */
export const i18n = {
    es: {
        messages: await readLocationFile('es'),
    },
    en: {
        messages: await readLocationFile('en'),
    }
}

const dataFiles = import.meta.glob('@i18n/data/*.ts', { eager: true });

/**
 * A function that returns a translation function for the specified language.
 * The translation function takes a key and returns the corresponding translation.
 * If the key doesn't exist in the specified language, it will fall back to the default language.
 */
export function useTranslations(lang?: string) {
    return function (key: string): string {
        const messages = i18n[(lang as keyof typeof i18n)] || i18n[defaultLang];
        return getNestedProperty(messages, key) ?? "";
    };
}

/**
 * 
 */
export function useData(lang?: string): Data {
    const key = `/src/i18n/data/${lang ?? defaultLang}.ts`;
    return (dataFiles[key] as any)?.default as Data;
}
