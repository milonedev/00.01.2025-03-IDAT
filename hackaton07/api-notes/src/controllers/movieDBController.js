const { fetchDataByPopularMovies } = require("../services/fetchMovieDB");

const getDataByPopularMovies = async (req, res) => {
    try {
        const data = await fetchDataByPopularMovies();

        if (!data) {
            throw new Error('No data found');
        }

        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = { getDataByPopularMovies };