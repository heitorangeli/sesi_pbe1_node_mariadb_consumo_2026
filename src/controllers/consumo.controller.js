const ConsumoModel = require('../models/consumo.model');

class ConsumoController {
    static listar(req, res) {
        ConsumoModel.findAll((err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(results);
        });
    }

    static buscarPorId(req, res) {
        const { id } = req.params;
        ConsumoModel.findById(id, (err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            if (results.length === 0) return res.status(404).json({ message: 'Registro não encontrado.' });
            res.json(results[0]);
        });
    }

    static criar(req, res) {
        ConsumoModel.create(req.body, (err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(201).json({ message: 'Criado com sucesso!', id: results.insertId });
        });
    }

    static atualizar(req, res) {
        const { id } = req.params;
        ConsumoModel.update(id, req.body, (err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            if (results.affectedRows === 0) return res.status(404).json({ message: 'Registro não encontrado.' });
            res.json({ message: 'Atualizado com sucesso!' });
        });
    }

    static deletar(req, res) {
        const { id } = req.params;
        ConsumoModel.delete(id, (err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            if (results.affectedRows === 0) return res.status(404).json({ message: 'Registro não encontrado.' });
            res.json({ message: 'Removido com sucesso!' });
        });
    }
    
}

module.exports = ConsumoController;
