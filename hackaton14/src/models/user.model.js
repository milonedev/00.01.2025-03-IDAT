const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    client: {
        type: DataTypes.STRING,
        allowNull: true,
    }
}, {
    timestamps: true, // Adds createdAt and updatedAt fields
});

module.exports = User;