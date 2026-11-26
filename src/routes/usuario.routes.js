const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/usuario.controller');

router.get('/usuarios', UsuarioController.listar);
router.get('/usuarios/:id', UsuarioController.buscarPorId);
router.post('/usuarios', UsuarioController.criar);
router.put('/usuarios/:id', UsuarioController.atualizar);
router.delete('/usuarios/:id', UsuarioController.deletar);
router.post('/usuarios/login', UsuarioController.login);

module.exports = router;
