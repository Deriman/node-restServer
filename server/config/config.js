// PUERTO //

process.env.PORT = process.env.PORT || 3000;

// ENTORNO //

process.env.NODE_ENV = process.env.NODE_ENV || 'DEV';

// BASE DE DATOS //

let urlDB;

if (process.env.NODE_ENV === 'DEV') {
    urlDB = 'mongodb://localhost:27017/cafe'
} else {
    urlDB = 'mongodb+srv://Deriman:Deriman18@cluster0.l0bwh.mongodb.net/cafe'
}

process.env.URL_DB = urlDB;