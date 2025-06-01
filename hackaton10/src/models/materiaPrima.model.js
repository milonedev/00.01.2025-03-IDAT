const moongoose = require('mongoose');

const materiaPrimaSchema = new moongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    cantidad: {
        type: Number,
        required: true,
    },
    proveedor: {
        type: String,
        required: true,
    },
    fechaCompra: {
        type: Date,
        required: true,
        default: Date.now,
    },
});

module.exports = moongoose.model('MateriaPrima', materiaPrimaSchema);