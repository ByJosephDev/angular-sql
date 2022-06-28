require('dotenv').config()
const { Sequelize } = require('sequelize');



const sequelize = new Sequelize('webapp' , 
        'root' || process.env.USER_DATABASE, process.env.PASSWORD_DATABASE || 'josephpuma2001', {
        host: 'localhost',
        dialect: 'mysql'
});

module.exports = sequelize;


