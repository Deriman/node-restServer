// PUERTO //

process.env.PORT = process.env.PORT || 3000;

// ENTORNO //

process.env.NODE_ENV = process.env.NODE_ENV || 'DEV';

// VENCIMIENTO DEL TOKEN //
// 60sg*60min*24horas*30días

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

// SEED DE AUTENTICACION //

process.env.SEED = process.env.SEED || 'este-es-el-seed-de-desarrollo';

// BASE DE DATOS //

let urlDB;

if (process.env.NODE_ENV === 'DEV') {
    urlDB = 'mongodb://localhost:27017/cafe'
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URL_DB = urlDB;