class Pokemon {
    constructor(name, type, abilities, image) {
        this.name = name;
        this.type = type;
        this.abilities = abilities;
        this.image = image;
    }

    static fromApiResponse(apiResponse) {
        const name = apiResponse.name;
        const type = apiResponse.types.map(t => t.type.name).join(', ');
        const abilities = apiResponse.abilities.map(a => a.ability.name).join(', ');
        const image = apiResponse.sprites.other['official-artwork'].front_default;

        return new Pokemon(name, type, abilities, image);
    }

}

module.exports = Pokemon;