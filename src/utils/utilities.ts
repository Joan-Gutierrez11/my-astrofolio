import fs from 'node:fs/promises';

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
 * Read a JSON file from the given path on project and return its contents as an object.
 * If the file doesn't exist or there's an error reading it, 
 * it will return an empty object.
 */
export async function readJsonFile(path: string): Promise<object> {
    const filePath = process.cwd() + '/src/' + path;
    let file;
    
    try {
        file = await fs.readFile(filePath, 'utf8');
        return JSON.parse(file);
    } catch (error) {
        console.error(`Error reading JSON file: ${error}`);
        return Promise.resolve({});
    }
}

/**
 * Capitalize the first letter of a given string and return the modified string.
 */
export function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
