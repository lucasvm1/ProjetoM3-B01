const express = require('express');
const router = express.Router();
const { validId, validObjectBody } = require('../middlewares/paleta.middleware');

const paletasController = require('../controllers/paletas.controller');

router.get('/all-paletas', paletasController.findPaletasController);
router.get('/one-paleta/:id', validId, paletasController.findPaletaByIdController);
router.post('/create-paleta', validId, paletasController.createPaletaController);
router.put('/update-paleta/:id', validId, validObjectBody, paletasController.updatePaletaController);
router.delete('/delete-paleta/:id', validId, paletasController.deletePaletaController);

module.exports = router;
