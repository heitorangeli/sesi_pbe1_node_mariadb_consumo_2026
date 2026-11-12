const db = require('../config/db');

class ConsumoModel {
    static async findAll(callback) {
        db.query('SELECT * FROM consumo', callback);
    }

    static async findById(id, callback) {
        db.query('SELECT * FROM consumo WHERE id = ?', [id], callback);
    }

    static async create(data, callback) {
        db.query('INSERT INTO consumo SET ?', [data], callback);
    }

    static async update(id, data, callback) {
        db.query('UPDATE consumo SET ? WHERE id = ?', [data, id], callback);
    }

    static async delete(id, callback) {
        db.query('DELETE FROM consumo WHERE id = ?', [id], callback);
    }
}

module.exports = ConsumoModel;
