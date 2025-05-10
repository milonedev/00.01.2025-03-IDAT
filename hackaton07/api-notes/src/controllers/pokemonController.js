const { fetchDataByPokemon } = require("../services/fetchDataByPokemon");

const getPokemonByName = async (req, res) => {
    const name = req.params.name;
    try {
        const pokemon = await fetchDataByPokemon(name);

        return res.status(200).json({
            name: pokemon.name,
            type: pokemon.type,
            abilities: pokemon.abilities,
            image: pokemon.image
        });

    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = { getPokemonByName };
