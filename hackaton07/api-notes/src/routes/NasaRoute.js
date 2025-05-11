const express = require('express');
const { getPhotosByMars } = require('../controllers/nasaController');

const router = express.Router();

router.get('/getPhotos', getPhotosByMars)

module.exports = router;
