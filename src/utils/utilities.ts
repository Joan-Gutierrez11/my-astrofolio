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
 * Get the full URL for a given path by prepending the PUBLIC_SITE_URL environment variable.
 */
export function myUrl(path: string): string {
    const baseUrl = import.meta.env.DEV 
        ? (import.meta.env.PUBLIC_DEV_BASE_URL || '')
        : import.meta.env.BASE_URL;
    return `${baseUrl.replace(/\/$/, '')}/${path}`;
}

/**
 * Fetch data from a given URL. 
 * If the `local` parameter is true, it will prepend the base URL to the path.
 */
export async function fetchData(url: string, local: boolean = true): Promise<any> {
    return fetch(local ? myUrl(url) : url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            return null; // or handle the error as needed
        });
}
