const express = require('express');
const { getAllMateriaPrima, createMateriaPrima, updateMateriaPrima, deleteMateriaPrima } = require('../controllers/materiaPrima.controller.js');

const router = express.Router();

router.get('/', getAllMateriaPrima);
router.post('/', createMateriaPrima);
router.put('/:id', updateMateriaPrima);
router.delete('/:id', deleteMateriaPrima);

module.exports = router;