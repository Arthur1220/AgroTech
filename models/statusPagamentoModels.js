const pool = require('../config/database');

const getStatusPagamentos = async () => {
    const [rows] = await pool.query('SELECT * FROM TBL_StatusPagamento');
    return rows;
};

const getStatusPagamentoById = async (id) => {
    const [rows] = await pool.query('SELECT * FROM TBL_StatusPagamento WHERE ID_StatusPagamento = ?', [id]);
    return rows;
}

const createStatusPagamento = async (statusPagamento) => {
    const { Nome } = statusPagamento;
    const [result] = await pool.query(
        'INSERT INTO TBL_StatusPagamento (Nome) VALUES (?)',
        [Nome]
    );
    return result.insertId;
};

const updateStatusPagamento = async (id, statusPagamento) => {
    const { Nome } = statusPagamento;
    const [result] = await pool.query(
        'UPDATE TBL_StatusPagamento SET Nome = ? WHERE ID_StatusPagamento = ?',
        [Nome, id]
    );
    return result.affectedRows;
};

const deleteStatusPagamento = async (id) => {
    const [result] = await pool.query('DELETE FROM TBL_StatusPagamento WHERE ID_StatusPagamento = ?', [id]);
    return result.affectedRows;
};

module.exports = { getStatusPagamentos, getStatusPagamentoById, createStatusPagamento, updateStatusPagamento, deleteStatusPagamento };