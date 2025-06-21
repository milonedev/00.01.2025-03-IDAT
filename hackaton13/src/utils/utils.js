import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Necesario si estás usando ESModules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataPath = path.join(__dirname, '../data/data.json');

// Leer el archivo JSON
export const readData = () => {
    const jsonData = fs.readFileSync(dataPath, 'utf-8');
    return JSON.parse(jsonData);
}

// Escribir al archivo JSON
export const writeData = (data) => {
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf-8');
}
