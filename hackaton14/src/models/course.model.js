// nombre, descripcion, img, portada, valor

const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');

const Course = sequelize.define('courses', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,                
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,       
        validate: {
            notEmpty: true,
            len: [3, 100] // Nombre debe tener entre 3 y 100 caracteres
        }
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: { 
            notEmpty: true,
            len: [10, 1000] // Descripción debe tener entre 10 y 500 caracteres
        }
    },
    img: {
        type: DataTypes.STRING,
        allowNull: true, // Imagen es opcional
        validate: {     
            isUrl: true // Validar que sea una URL
        }
    },      
    cover: {
        type: DataTypes.STRING,
        allowNull: true, // Portada es opcional
        validate: {     
            isUrl: true // Validar que sea una URL
        }
    },
    value: {
        type: DataTypes.FLOAT,
        allowNull: false,       
        validate: {
            notEmpty: true,
            isFloat: true, // Debe ser un número flotante
            min: 0 // Valor mínimo debe ser 0
        }
    }
}, {
    timestamps: true, // Agrega createdAt y updatedAt
});

module.exports = Course;