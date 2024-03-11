/* importar info que voy a usar en este modulo */
const autos = require('../db/autos');


/* crear el modulo en si */
const autosController = {
    index: function(req, res) {
        return res.render('autos', {listado : autos.lista});
    },
    filtrarPorColor: function(req, res) {
        let colorBuscado = req.params.colorBuscado; //red, blue
        /* return res.send(); */
        return res.render("autos", {listado : autos.filtrarPorColor(colorBuscado)})
    }
};

/* exportar el modulo */
module.exports = autosController;