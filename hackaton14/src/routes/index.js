const express = require('express');
const { readdirSync } = require('fs');
const router = express.Router();

const PATH_ROUTER = `${__dirname}`;

readdirSync(PATH_ROUTER).filter((filename) => {
    const cleanName = filename.split('.').shift();

    if (cleanName !== 'index') {
        router.use(`/${cleanName}`, require(`./${filename}`));
    }
})

module.exports = router