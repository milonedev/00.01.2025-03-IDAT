const express  = require('express');
const { readdirSync } = require('fs');
const router = express.Router();


const PATH_ROUTER = `${__dirname}`;

console.log('leer archivos:', readdirSync(PATH_ROUTER));
readdirSync(PATH_ROUTER).filter((filename) => {
    const cleanName = filename.split('.').shift();
    
    if (cleanName !== 'index') {

        // Importacion dinamicas de las rutas
        console.log(`Cargando ruta: /${cleanName}`);
        router.use(`/${cleanName}`, require(`./${filename}`));
    }
})

module.exports = router