const mongoose = require('mongoose');
const personalSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    puesto: {
        type: String,
        required: true,
    },
    salario: {
        type: Number,
        required: true,
    },
    fechaIngreso: {
        type: Date,
        required: true,
        default: Date.now,
    },
});

module.exports = mongoose.model('Personal', personalSchema);