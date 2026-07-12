/**
 * Utility function to safely access nested properties in an object 
 * using a dot-separated path.
 */
export function getNestedProperty(obj: any, path: string): any {
    const parts = path.split('.');

    return parts.reduce((currentLevel, key) => {
        if (currentLevel && typeof currentLevel === 'object' && key in currentLevel) {
            return currentLevel[key];
        }
        return undefined;
    }, obj);
}

/**
 * Capitalize the first letter of a given string and return the modified string.
 */
export function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * A singleton class that provides utility methods for constructing URLs based on a base URL.
 */
export class UtilityURL {
    private static instance: UtilityURL;
    private baseUrl?: URL;

    private constructor() {}

    public setBaseUrl(v : URL): this {
        this.baseUrl = v;
        return this;
    }
    
    public getUrlPath(path: string): string {
        const baseUrl = import.meta.env.BASE_URL;
        return `${baseUrl.replace(/\/$/, '')}/${path}`;
    }

    public getUrl(path: string): string {
        if (!this.baseUrl) {
            throw new Error("Base URL is not set. "
                + "Please set it using setBaseUrl before calling getUrl.");
        }
        const url = `${this.baseUrl.protocol}//${this.baseUrl.host}${this.getUrlPath(path)}`;
        return url;
    }

    public static getInstance(): UtilityURL {
        if (!UtilityURL.instance) {
            UtilityURL.instance = new UtilityURL();
        }
        return UtilityURL.instance;
    }
}

/**
 * Get the full URL for a given path by prepending the PUBLIC_SITE_URL environment variable.
 */
export function myUrl(path: string): string {
    return UtilityURL.getInstance().getUrlPath(path);
}

/**
 * Fetch data from a given URL. 
 * If the `local` parameter is true, it will prepend the base URL to the path.
 */
export async function fetchLocalData(path: string, prependUrl?: URL): Promise<any> {
    if (prependUrl) {
        UtilityURL.getInstance().setBaseUrl(prependUrl);
    }

    const finalUrl = UtilityURL.getInstance().getUrl(path);
    return fetch(finalUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            return null;
        });
}
