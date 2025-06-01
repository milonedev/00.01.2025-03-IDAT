const express = require('express');

const router = express.Router();

const { getAllInsumos, createInsumo } = require('../controllers/insumo.controller.js');

router.get('/', getAllInsumos);
router.post('/', createInsumo);
// router.put('/:id', updateInsumo);
// router.delete('/:id', deleteInsumo);

module.exports = router;