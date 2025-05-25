const productModel = require('../models/productModel.js');

exports.getAllProducts = async (req, res) => {
    try {
        const { id } = req.query;
        const products = await productModel.getAllProducts(id);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving products' });
    }
}

exports.insertProduct = async (req, res) => {
    try {
        const product = req.body;
        const newProduct = await productModel.insertProduct(product);
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: 'Error inserting product' });
    }
}

exports.getProductBetweenName = async (req, res) => {
    try {
        console.log(req.query);
        const {caracter} = req.query;
        
        const products = await productModel.getProductBetweenName(caracter);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving products' });
    }
}