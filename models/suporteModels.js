const pool = require('../config/db');

const getSuportes = async () => {
    const [rows] = await pool.query('SELECT * FROM TBL_Suporte');
    return rows;
};

const getSuporteById = async (id) => {
    const [rows] = await pool.query('SELECT * FROM TBL_Suporte WHERE ID_Suporte = ?', [id]);
    return rows;
};

const createSuporte = async (suporte) => {
    const { Descricao, Created_at, ID_Cliente } = suporte;
    const [result] = await pool.query(
        'INSERT INTO TBL_Suporte (Descricao, Created_at, ID_Cliente) VALUES (?, ?, ?)',
        [Descricao, Created_at, ID_Cliente]
    );
    return result.insertId;
};

const updateSuporte = async (id, suporte) => {
    const { Descricao, Created_at, ID_Cliente } = suporte;
    const [result] = await pool.query(
        'UPDATE TBL_Suporte SET Descricao = ?, Created_at = ?, ID_Cliente = ? WHERE ID_Suporte = ?',
        [Descricao, Created_at, ID_Cliente, id]
    );
    return result.affectedRows;
};

const deleteSuporte = async (id) => {
    const [result] = await pool.query('DELETE FROM TBL_Suporte WHERE ID_Suporte = ?', [id]);
    return result.affectedRows;
};

module.exports = { getSuportes, getSuporteById, createSuporte, updateSuporte, deleteSuporte };