const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/database');

class Product extends Model {}
Product.init({
    nombre: DataTypes.STRING,
    categoria: DataTypes.STRING,
    ubicacion: DataTypes.STRING,
    precio: DataTypes.DOUBLE,
},{
    sequelize,
    modelName: "product"
    
})

module.exports = Product;

