const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Products = sequelize.define('products',{
    name: DataTypes.STRING,
    value: DataTypes.DECIMAL(12,2),
    images_show: DataTypes.ARRAY(DataTypes.STRING),
    text_alt: DataTypes.STRING,
    category: DataTypes.STRING,
    genger: DataTypes.STRING,
    description: DataTypes.STRING
});

module.exports = Products;