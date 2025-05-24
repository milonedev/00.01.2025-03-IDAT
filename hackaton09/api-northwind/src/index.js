const express = require('express')

const app = express()
const port = 3000

require('dotenv').config()
app.use(express.json())

// Rputes

// https://image.tmdb.org/t/p/w500/zboCGZ4aIqPMd7VFI4HWnmc7KYJ.jpg
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
