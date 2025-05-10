const Pokemon = require('../models/Pokemon.js');

const fetchDataByPokemon = async (name) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        if (!response.ok) {
            throw new Error('Pokemon not found');
        }
        const data = await response.json();
        
        return Pokemon.fromApiResponse(data);

    } catch (error) {

        throw error;
    }
}

module.exports = { fetchDataByPokemon };