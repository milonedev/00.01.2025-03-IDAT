const ProduccionSchema = require('../models/produccion.model.js');
const PersonalSchema = require('../models/personal.model.js');
const MateriaPrimaSchema = require('../models/materiaPrima.model.js');
const InsumosSchema = require('../models/insumo.model.js');

const getAllProduccion = async (req, res) => {
    try {
        let producciones = await ProduccionSchema.find();

        // Reemplazar cada encargado con su objeto correspondiente
        producciones = await Promise.all(
            producciones.map(async (produccion) => {
                const encargado = await PersonalSchema.findById(produccion.encargado).lean();
                const materiaPrimaUsada = await MateriaPrimaSchema.findById(produccion.materiaPrimaUsada[0]).lean();

                const insumoUsados = await InsumosSchema.findById(produccion.insumoUsados[0]).lean();
                return {
                    ...produccion.toObject(),
                    encargado,
                    materiaPrimaUsada,
                    insumoUsados
                };
            })
        );

        return res.status(200).json(producciones);
    } catch (error) {
        return res.status(500).json({ message: 'Error al obtener las producciones', error });
    }
}

const getProduccionById = async (req, res) => {
    try {
        const { id } = req.params;
        const produccion = await ProduccionSchema.findById(id)
            .populate('encargado', 'nombre puesto')
            .populate('insumosUtilizados.insumoId', 'nombre unidadMedida');

        if (!produccion) {
            return res.status(404).json({ message: 'Producción no encontrada' });
        }

        res.status(200).json(produccion);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la producción', error });
    }
}

const createProduccion = async (req, res) => {
    try {
        const { producto, cantidad, encargado, insumoUsados, materiaPrimaUsada } = req.body;

        if (!producto || !cantidad || !encargado) {
            return res.status(400).json({ message: 'Todos los campos son obligatorios' });
        }

        const nuevaProduccion = new ProduccionSchema({
            producto,
            cantidad,
            encargado,
            insumoUsados,
            materiaPrimaUsada
        });

        const savedProduccion = await nuevaProduccion.save();
        return res.status(201).json(savedProduccion);
    } catch (error) {

        console.error('Error al crear la producción:', error);

        return res.status(500).json({ message: 'Error al crear la producción', error });
    }
}

const updateProduccion = async (req, res) => {
    try {
        const { id } = req.params;
        const { producto, cantidad, fechaProduccion, encargado, insumosUtilizados } = req.body;

        const updatedProduccion = await ProduccionSchema.findByIdAndUpdate(
            id,
            { producto, cantidad, fechaProduccion, encargado, insumosUtilizados },
            { new: true }
        );

        if (!updatedProduccion) {
            return res.status(404).json({ message: 'Producción no encontrada' });
        }

        res.status(200).json(updatedProduccion);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar la producción', error });
    }
}

const deleteProduccion = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProduccion = await ProduccionSchema.findByIdAndDelete(id);

        if (!deletedProduccion) {
            return res.status(404).json({ message: 'Producción no encontrada' });
        }

        res.status(200).json({ message: 'Producción eliminada exitosamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la producción', error });
    }
}

module.exports = {
    getAllProduccion,
    getProduccionById,
    createProduccion,
    updateProduccion,
    deleteProduccion
};
