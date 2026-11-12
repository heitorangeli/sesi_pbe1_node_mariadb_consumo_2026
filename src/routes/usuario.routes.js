const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/usuario.controller');

router.get('/usuario', UsuarioController.listar);
router.get('/usuario/:id', UsuarioController.buscarPorId);
router.post('/usuario', UsuarioController.criar);
router.put('/usuario/:id', UsuarioController.atualizar);
router.delete('/usuario/:id', UsuarioController.deletar);

module.exports = router;
