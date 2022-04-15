const express = require('express');
const router = express.Router();

const paletasController = require('../controllers/paletas.controller');

router.get('/todas-paletas', paletasController.findPaletasController);
router.get('/paleta/:id', paletasController.findPaletaByIdController);

module.exports = router;
