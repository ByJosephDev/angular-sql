const express = require('express');
//const conectarDB = require('./config/db');
const cors = require('cors');
const sequelize = require('./config/database');

//Creamos el servidor
const app = express();

//Conectamos a la BD
//conectarDB();
app.use(cors());

app.use(express.json())

app.use('/api/productos', require('./routes/producto'));

app.listen(4000, () =>{
    console.log('El servidor esta corriendo perfectamente, en 4000');
})



const connection = async () =>{
    try {
      await sequelize.sync({ force: false});
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }
  
connection();