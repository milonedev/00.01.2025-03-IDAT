// Traer el modulo de express en una variable
const express = require('express')
// Asignamos express a nuestra aplicacion
const app = express()
var cors = require('cors')

const router = require('./routes/index.js');
// Definimos el puerto en el que escuchara nuestra aplicacion
const port = 3000

app.use(cors())
app.use(express.json()) // Middleware para parsear el cuerpo de las peticiones a JSON

app.use(router)

// Escuchamos las peticiones en el puerto definido
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
