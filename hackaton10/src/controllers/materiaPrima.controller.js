const materiaPrimaSchema = require('../models/materiaPrima.model.js');

const createMateriaPrima = async (req, res) => {
    try {
        const { nombre, cantidad, proveedor } = req.body;

        if (!nombre || !cantidad || !proveedor) {
            return res.status(400).json({ message: 'Todos los campos son obligatorios' });
        }

        const nuevaMateriaPrima = new materiaPrimaSchema({
            nombre,
            cantidad,
            proveedor
        });

        const savedMateriaPrima = await nuevaMateriaPrima.save();
        res.status(201).json(savedMateriaPrima);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la materia prima', error });
    }
}

const getAllMateriaPrima = async (req, res) => {
    try {
        const materiaPrima = await materiaPrimaSchema.find();
        res.status(200).json(materiaPrima);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la materia prima', error });
    }
}

const getMateriaPrimaById = async (req, res) => {
    try {
        const { id } = req.params;
        const materiaPrima = await materiaPrimaSchema.findById(id);

        if (!materiaPrima) {
            return res.status(404).json({ message: 'Materia prima no encontrada' });
        }

        res.status(200).json(materiaPrima);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la materia prima', error });
    }
}

const updateMateriaPrima = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, cantidad, proveedor, fechaCompra } = req.body;

        const updatedMateriaPrima = await materiaPrimaSchema.findByIdAndUpdate(
            id,
            { nombre, cantidad, proveedor, fechaCompra },
            { new: true }
        );

        if (!updatedMateriaPrima) {
            return res.status(404).json({ message: 'Materia prima no encontrada' });
        }

        res.status(200).json(updatedMateriaPrima);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar la materia prima', error });
    }
}

const deleteMateriaPrima = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedMateriaPrima = await materiaPrimaSchema.findByIdAndDelete(id);

        if (!deletedMateriaPrima) {
            return res.status(404).json({ message: 'Materia prima no encontrada' });
        }

        res.status(200).json({ message: 'Materia prima eliminada exitosamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la materia prima', error });
    }
}

module.exports = {
    createMateriaPrima,
    getAllMateriaPrima,
    getMateriaPrimaById,
    updateMateriaPrima,
    deleteMateriaPrima
};