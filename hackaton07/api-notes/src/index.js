const express = require('express')
const PokeRoute = require('./routes/PokeRoute.js')
const app = express()
const port = 3000


app.use(express.json())

// Rputes
app.use('/api/pokemon', PokeRoute);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
