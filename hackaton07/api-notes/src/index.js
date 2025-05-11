const express = require('express')
const PokeRoute = require('./routes/PokeRoute.js');
const NasaRoute = require('./routes/NasaRoute.js');
const MovieDBRoute = require('./routes/MovieDBRoute.js');

const app = express()
const port = 3000

require('dotenv').config()
app.use(express.json())

// Rputes
app.use('/api/pokemon', PokeRoute);
app.use('/api/nasa', NasaRoute);
app.use('/api/moviedb', MovieDBRoute);

// https://image.tmdb.org/t/p/w500/zboCGZ4aIqPMd7VFI4HWnmc7KYJ.jpg
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
