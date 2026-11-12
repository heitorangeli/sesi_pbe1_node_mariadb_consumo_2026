const UsuarioModel = require('../models/usuario.model');

class UsuarioController {
    static listar(req, res) {
        UsuarioModel.findAll((err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(results);
        });
    }

    static buscarPorId(req, res) {
        const { id } = req.params;
        UsuarioModel.findById(id, (err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            if (results.length === 0) return res.status(404).json({ message: 'Registro não encontrado.' });
            res.json(results[0]);
        });
    }

    static criar(req, res) {
        UsuarioModel.create(req.body, (err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(201).json({ message: 'Criado com sucesso!', id: results.insertId });
        });
    }

    static atualizar(req, res) {
        const { id } = req.params;
        UsuarioModel.update(id, req.body, (err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            if (results.affectedRows === 0) return res.status(404).json({ message: 'Registro não encontrado.' });
            res.json({ message: 'Atualizado com sucesso!' });
        });
    }

    static deletar(req, res) {
        const { id } = req.params;
        UsuarioModel.delete(id, (err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            if (results.affectedRows === 0) return res.status(404).json({ message: 'Registro não encontrado.' });
            res.json({ message: 'Removido com sucesso!' });
        });
    }
    static resumoPorRisco(callback) {
        const sql = 'SELECT nivelRisco, COUNT(*) AS total FROM UsoIA GROUP BY nivelRisco;';
        con.query(sql, callback);
    }

    static resumoPorRisco(callback) {
    const sql = `
        SELECT 
            SUM(CASE WHEN nivelRisco = 'Alto' THEN 1 ELSE 0 END) AS alto,
            SUM(CASE WHEN nivelRisco = 'Médio' THEN 1 ELSE 0 END) AS medio,
            SUM(CASE WHEN nivelRisco = 'Baixo' THEN 1 ELSE 0 END) AS baixo
        FROM UsoIA;
    `;
    con.query(sql, callback);
}
}

module.exports = UsuarioController;
