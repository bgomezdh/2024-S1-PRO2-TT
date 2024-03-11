/* importar express y router */
const express = require('express');
const router = express.Router();
const autosController = require('../controllers/autosController')

/* crear rutas con sus sufijos */

router.get("/", autosController.index);

router.get("/filtrarColor/:colorBuscado?", autosController.filtrarPorColor);


/* exportar ruteador */
module.exports = router;