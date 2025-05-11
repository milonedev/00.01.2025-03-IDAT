const fetchDataByPopularMovies = async () => {
    const token = process.env.PUBLIC_TOKEN_API_MOVIEDB;
    const path = 'https://image.tmdb.org/t/p/w500';

    try {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular', {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const data = await response.json();

        return data.results.map(movie => ({
            id: movie.id,
            title: movie.title,
            overview: movie.overview,
            releaseDate: movie.release_date,
            posterPath: path + movie.poster_path,
        }));

    } catch (error) {
        console.error('Error fetching popular movies:', error);
        throw error;
    }
}

module.exports = { fetchDataByPopularMovies };