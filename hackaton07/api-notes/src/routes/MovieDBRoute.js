const express = require('express');
const { getDataByPopularMovies } = require('../controllers/movieDBController');
const router = express.Router();

router.get('/movie', getDataByPopularMovies)

module.exports = router;