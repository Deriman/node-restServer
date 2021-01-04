// Configuración de variables de entorno
require('./config/config');

// Conexión a la Base de Datos Mongo
require('./connectBD');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Configuración global de rutas
app.use(require('./routes/index'));

// parse application/json
app.use(bodyParser.json());

app.listen(process.env.PORT, () => {
    console.log('Escuchando en el puerto ', process.env.PORT);
});