/* importar express y router */
const express = require('express');
const router = express.Router();

const autos = require('../db/autos');


/* crear rutas con sus sufijos */

router.get("/", function(req, res) {
    return res.send(autos.lista)
});

router.get("/filtrarColor/:colorBuscado?", function(req, res) {
    let colorBuscado = req.params.colorBuscado; //red, blue
    return res.send(autos.filtrarPorColor(colorBuscado))
});


/* exportar ruteador */
module.exports = router;