const jwt = require('jsonwebtoken');

let verificaToken = (req, res, next) => {

    let token = req.get('Authorization'); // Token que me viene en la petición

    // Verifica el token que recibimos en la petición y si ok
    // devuelve la información sin codificar (datos de usuario + seed + caducidad)
    jwt.verify(token, process.env.SEED, (err, decoded) => {

        // Si no válido no pasa al next(), es decir no completa la petición.
        if (err) {
            return res.status(401).json({
                ok: false,
                err: 'Token no válido'
            });
        }

        // Asigna al request la información del usuario introducido en el token
        req.usuario = decoded.data;

        // Continua con la ejecución de la petición en cada caso.
        next();
    });
}

let verificaAdminRole = (req, res, next) => {

    let usuario = req.usuario;
    console.log(usuario.role);

    if (usuario.role == 'USER_ROLE') {

        return res.json({
            ok: true,
            message: 'Necesita Role de Administrador'
        });
    }

    next();
}

module.exports = {
    verificaToken,
    verificaAdminRole
}