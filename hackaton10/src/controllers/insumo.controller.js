const Insumo = require('../models/insumo.model.js');

const getAllInsumos = async (req, res) => {
    try {
        const insumos = await Insumo.find();
        res.status(200).json(insumos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los insumos', error });
    }
}

const createInsumo = async (req, res) => {
    try {
        const { nombre, unidadMedida, cantidad, proveedor } = req.body;

        // console.log('Datos recibidos:', req.body);

        if (!nombre || !unidadMedida || !cantidad) {
            return res.status(400).json({ message: 'Todos los campos son obligatorios' });
        }

        const nuevoInsumo = new Insumo({
            nombre,
            unidadMedida,
            cantidad,
            proveedor
        });

        const savedInsumo = await nuevoInsumo.save();
        res.status(201).json(savedInsumo);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el insumo', error });
    }
}

module.exports = {
    getAllInsumos,
    createInsumo
};