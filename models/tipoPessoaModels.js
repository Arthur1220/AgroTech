const pool = require('../config/db');

const getTipoPessoas = async () => {
    const [rows] = await pool.query('SELECT * FROM TBL_TipoPessoa');
    return rows;
};

const createTipoPessoa = async (tipoPessoa) => {
    const { Nome } = tipoPessoa;
    const [result] = await pool.query(
        'INSERT INTO TBL_TipoPessoa (Nome) VALUES (?)',
        [Nome]
    );
    return result.insertId;
};

const updateTipoPessoa = async (id, tipoPessoa) => {
    const { Nome } = tipoPessoa;
    const [result] = await pool.query(
        'UPDATE TBL_TipoPessoa SET Nome = ? WHERE ID_TipoPessoa = ?',
        [Nome, id]
    );
    return result.affectedRows;
};

const deleteTipoPessoa = async (id) => {
    const [result] = await pool.query('DELETE FROM TBL_TipoPessoa WHERE ID_TipoPessoa = ?', [id]);
    return result.affectedRows;
};

module.exports = { getTipoPessoas, createTipoPessoa, updateTipoPessoa, deleteTipoPessoa };