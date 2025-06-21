import { readData, writeData } from "../utils/utils.js";

export const getAllList = (req, res) => {
    const list = readData();

    const data = list.filter(item => item.estado === 'Pendiente');
    return res.status(200).json({ data, total: list.length });
}

export const addItem = (req, res) => {
    const { nombre, unidadMedida, cantidad } = req.body;

    if (!nombre || !unidadMedida || !cantidad) {
        return res.status(400).json({ error: 'Faltan datos requeridos' });
    }

    const list = readData();

    const newItem = {
        nombre,
        unidadMedida,
        cantidad,
        estado: 'Pendiente',
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBgWQ6YSWUs1seMwLYpFaN-3cX7cfuaDyKYA&s',
        fechaRegistro: new Date(), // Formato YYYY-MM-DD
        fechaCumplimiento: '',
        precio: 0
    };

    list.push(newItem);
    writeData(list);

    return res.status(201).json({ message: 'Item agregado', item: newItem });
}

export const updateEstate = (req, res) => {
    const { nombre } = req.body;

    if (!nombre) {
        return res.status(400).json({ error: 'Faltan datos requeridos' });
    }
    const list = readData();

    const item = list.find(item => item.nombre === nombre);

    if (!item) {
        return res.status(404).json({ error: 'Item no encontrado' });
    }

    item.estado = 'Completado';
    item.fechaCumplimiento = new Date();
    writeData(list);
    
    return res.status(200).json({ message: 'Estado actualizado', item });
}