const express = require('express');
const materiaPrimaRoutes = require('./routes/materiaPrima.route.js');
const personalRoutes = require('./routes/personal.route.js');
const produccionRoutes = require('./routes/produccion.route.js');
const insumoRoutes = require('./routes/insumo.route.js'); 

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./db/db.js'); // Import the database connection

// routes

app.use('/api/materiaPrima', materiaPrimaRoutes);
app.use('/api/personal', personalRoutes);
app.use('/api/produccion', produccionRoutes);
app.use('/api/insumo', insumoRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});