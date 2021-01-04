const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const Usuario = require('../models/usuarios')
const app = express();

app.post('/login', (req, res) => {

    let body = req.body;

    // Busca por email, si ok devuelve el usuario de la BD
    Usuario.findOne({ email: body.email }, (err, usuarioDB) => {

        if (err) {
            return res.json({
                ok: false,
                err
            });
        }

        if (!usuarioDB) {
            return res.status(400).json({
                ok: false,
                message: '(Usuario) o contraseña incorrectos'
            });
        }
        // Si pasa el email, comparamos contraseñas
        if (!bcrypt.compareSync(body.password, usuarioDB.password)) {
            return res.status(400).json({
                ok: false,
                message: 'Usuario o (contraseña) incorrectos'
            });
        }
        // Genero un token con la información del usuario de BD, la semilla y la 
        // caducidad del token.
        let token = jwt.sign({
            data: usuarioDB
        }, process.env.SEED, { expiresIn: process.env.CADUCIDAD_TOKEN });

        res.json({
            ok: true,
            usuario: usuarioDB,
            token
        });
    })
});

module.exports = app;