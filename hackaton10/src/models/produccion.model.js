const mongoose = require('mongoose');
const materiaPrimaModel = require('./materiaPrima.model');
const ProduccionSchema = new mongoose.Schema({
    producto: {
        type: String,
        required: true,
    },
    cantidad: {
        type: Number,
        required: true,
    },
    fechaProduccion: {
        type: Date,
        required: true,
        default: Date.now,
    },
    encargado: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Personal',
    },
    insumoUsados: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Insumo',
    }],
    materiaPrimaUsada: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MateriaPrima',
    }],
});

module.exports = mongoose.model('Produccion', ProduccionSchema);