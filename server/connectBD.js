const mongoose = require('mongoose');

mongoose.connect(process.env.URL_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}, (err, resp) => {

    if (err) throw err;

    console.log('Base de Datos ONLINE!!!');

});

module.exports = mongoose;