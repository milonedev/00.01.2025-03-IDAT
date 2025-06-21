const express = require('express');
const list = require('../data/data');
const { getAllList, addItem, updateEstate } = require('../controllers/listcontroller.js');

const router = express.Router();

router.get('/', getAllList )

router.post('/', addItem)

router.put('/', updateEstate);

module.exports = router