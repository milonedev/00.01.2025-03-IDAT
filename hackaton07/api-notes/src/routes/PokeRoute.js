const express = require('express');
const { getPokemonByName } = require('../controllers/pokemonController.js');

const router = express.Router();

router.get('/:name', getPokemonByName)

module.exports = router;
