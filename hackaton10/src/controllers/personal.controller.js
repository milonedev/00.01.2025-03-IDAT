const personalSchema = require('../models/personal.model.js');

const getAllPersonal = async (req, res) => {
    try {
        const personal = await personalSchema.find();
        res.status(200).json(personal);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el personal', error });
    }
}

const getPersonalById = async (req, res) => {
    try {
        const { id } = req.params;
        const personal = await personalSchema.findById(id);

        if (!personal) {
            return res.status(404).json({ message: 'Personal no encontrado' });
        }

        res.status(200).json(personal);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el personal', error });
    }
}
const createPersonal = async (req, res) => {
    try {
        const { nombre, puesto, salario } = req.body;

        if (!nombre || !puesto || !salario) {
            return res.status(400).json({ message: 'Todos los campos son obligatorios' });
        }

        const nuevoPersonal = new personalSchema({
            nombre,
            puesto,
            salario
        });

        const savedPersonal = await nuevoPersonal.save();
        res.status(201).json(savedPersonal);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el personal', error });
    }
}
const updatePersonal = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, puesto, salario, fechaIngreso } = req.body;

        const updatedPersonal = await personalSchema.findByIdAndUpdate(
            id,
            { nombre, puesto, salario, fechaIngreso },
            { new: true }
        );

        if (!updatedPersonal) {
            return res.status(404).json({ message: 'Personal no encontrado' });
        }

        res.status(200).json(updatedPersonal);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el personal', error });
    }
}
const deletePersonal = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedPersonal = await personalSchema.findByIdAndDelete(id);

        if (!deletedPersonal) {
            return res.status(404).json({ message: 'Personal no encontrado' });
        }

        res.status(200).json({ message: 'Personal eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el personal', error });
    }
}
module.exports = {
    getAllPersonal,
    getPersonalById,
    createPersonal,
    updatePersonal,
    deletePersonal
};