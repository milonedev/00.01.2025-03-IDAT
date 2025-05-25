const express = require('express');
const { getAllProducts, insertProduct, getProductBetweenName } = require('../controllers/productController.js');

const router = express.Router();

router.get('/', getAllProducts);
router.post('/', insertProduct);
router.get('/findByName', getProductBetweenName);

module.exports = router;