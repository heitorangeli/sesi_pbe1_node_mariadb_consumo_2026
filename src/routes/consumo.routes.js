const express = require('express');
const router = express.Router();
const ConsumoController = require('../controllers/consumo.controller');

router.get('/consumo', ConsumoController.listar);
router.get('/consumo/:id', ConsumoController.buscarPorId);
router.post('/consumo', ConsumoController.criar);
router.put('/consumo/:id', ConsumoController.atualizar);
router.delete('/consumo/:id', ConsumoController.deletar);

module.exports = router;
