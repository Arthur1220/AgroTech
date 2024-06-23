const pool = require('../config/db');

const getPagamentos = async () => {
    const [rows] = await pool.query('SELECT * FROM TBL_Pagamento');
    return rows;
};

const getPagamentoById = async (id) => {
    const [rows] = await pool.query('SELECT * FROM TBL_Pagamento WHERE ID_Pagamento = ?', [id]);
    return rows;
};

const createPagamento = async (pagamento) => {
    const { MetodoPagamento, ValorTotal, DataPagamento, ID_StatusPagamento } = pagamento;
    const [result] = await pool.query(
        'INSERT INTO TBL_Pagamento (MetodoPagamento, ValorTotal, DataPagamento, ID_StatusPagamento) VALUES (?, ?, ?, ?)',
        [MetodoPagamento, ValorTotal, DataPagamento, ID_StatusPagamento]
    );
    return result.insertId;
};

const updatePagamento = async (id, pagamento) => {
    const { MetodoPagamento, ValorTotal, DataPagamento, ID_StatusPagamento } = pagamento;
    const [result] = await pool.query(
        'UPDATE TBL_Pagamento SET MetodoPagamento = ?, ValorTotal = ?, DataPagamento = ?, ID_StatusPagamento = ? WHERE ID_Pagamento = ?',
        [MetodoPagamento, ValorTotal, DataPagamento, ID_StatusPagamento, id]
    );
    return result.affectedRows;
};

const deletePagamento = async (id) => {
    const [result] = await pool.query('DELETE FROM TBL_Pagamento WHERE ID_Pagamento = ?', [id]);
    return result.affectedRows;
};

module.exports = { getPagamentos, getPagamentoById, createPagamento, updatePagamento, deletePagamento };