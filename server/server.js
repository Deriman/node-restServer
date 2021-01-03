require('./config/config');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require('./routes/usuario'));

// parse application/json
app.use(bodyParser.json());

mongoose.connect(process.env.URL_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}, (err, resp) => {

    if (err) throw err;

    console.log('Base de Datos ONLINE!!!');

});

app.listen(process.env.PORT, () => {
    console.log('Escuchando en el puerto ', process.env.PORT);
});