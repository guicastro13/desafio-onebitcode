const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Products = sequelize.define('products',{
    name: DataTypes.STRING,
    value: DataTypes.DECIMAL(12,2)
});

module.exports = Products;