import { getNestedProperty, readJsonFile } from "@utils/utilities";

/**
 * Default language to fall back to if the requested language file doesn't exist.
 */
const defaultLang = 'es';

/**
 * Load the messages for the given language. 
 * If the language file doesn't exist, it will return an empty object.
 */
async function getMessages(lang: string = 'es'): Promise<Record<string, any>> {
    return readJsonFile(`i18n/${lang}.json`);
}

/**
 * An object that holds the translations for each supported language.
 */
export const i18n = {
    es: await getMessages('es'),
    en: await getMessages('en'),
}

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
