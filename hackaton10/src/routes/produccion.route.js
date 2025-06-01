const express = require('express');
const { getAllProduccion, createProduccion, updateProduccion, deleteProduccion } = require('../controllers/produccion.controller.js');

const router = express.Router();

router.get('/', getAllProduccion);
router.post('/', createProduccion);
router.put('/:id', updateProduccion);
router.delete('/:id', deleteProduccion);

module.exports = router;