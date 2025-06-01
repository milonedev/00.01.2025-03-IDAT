const express = require('express');
const { getAllPersonal, createPersonal, updatePersonal, deletePersonal } = require('../controllers/personal.controller.js');

const router = express.Router();

router.get('/', getAllPersonal);
router.post('/', createPersonal);
router.put('/:id', updatePersonal);
router.delete('/:id', deletePersonal);  

module.exports = router;