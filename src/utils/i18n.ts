import { getNestedProperty } from "@utils/utilities";

import esMessages from '@i18n/messages/es.json';
import enMessages from '@i18n/messages/en.json';

/**
 * Default language to fall back to if the requested language file doesn't exist.
 */
const defaultLang = 'es';

/**
 * Type that represents paths to all nested properties in an object, using dot notation.
 */
type Paths<T, Prefix extends string = ''> = T extends object
  ? {
        [K in keyof T & string]: T[K] extends object 
            ? Paths<T[K], `${Prefix}${K}.`>
            : `${Prefix}${K}`;
    }[keyof T & string]
  : never;

/**
 * An object that holds the translations for each supported language.
 */
export const i18n = {
    es: {
        messages: esMessages,
    },
    en: {
        messages: enMessages,
    }
}

/**
 * Type that represents all available languages in the i18n object.
 */
export type Langs = keyof typeof i18n;

/**
 * Type that represents the structure of the data files for each language.
 */
export type TranslationKeys = Paths<typeof i18n[Langs]>;

/**
 * A function that returns a translation function for the specified language.
 * The translation function takes a key and returns the corresponding translation.
 * If the key doesn't exist in the specified language, it will fall back to the default language.
 */
export function useTranslations(lang?: Langs|string) {
    return function (key: TranslationKeys): string {
        const messages = i18n[(lang as Langs)] || i18n[defaultLang];
        return getNestedProperty(messages, key) ?? "";
    };
}
