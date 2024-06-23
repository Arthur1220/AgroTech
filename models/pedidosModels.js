const pool = require('../config/db');

const getItensPedidos = async () => {
    const [rows] = await pool.query('SELECT * FROM TBL_ItensPedido');
    return rows;
};

const getItensPedidoById = async (id) => {
    const [rows] = await pool.query('SELECT * FROM TBL_ItensPedido WHERE ID_ItensPedido = ?', [id]);
    return rows;
};

const createItensPedido = async (itensPedido) => {
    const { DataPedido, ValorTotal, ID_Cliente, ID_Pagamento, ID_StatusPedido } = itensPedido;
    const [result] = await pool.query(
        'INSERT INTO TBL_ItensPedido (DataPedido, ValorTotal, ID_Cliente, ID_Pagamento, ID_StatusPedido) VALUES (?, ?, ?, ?)',
        [DataPedido, ValorTotal, ID_Cliente, ID_Pagamento, ID_StatusPedido]
    );
    return result.insertId;
};

const updateItensPedido = async (id, itensPedido) => {
    const { DataPedido, ValorTotal, ID_Cliente, ID_Pagamento, ID_StatusPedido } = itensPedido;
    const [result] = await pool.query(
        'UPDATE TBL_ItensPedido SET DataPedido = ?, ValorTotal = ?, ID_Cliente = ?, ID_Pagamento = ?, ID_StatusPedido = ? WHERE ID_ItensPedido = ?',
        [DataPedido, ValorTotal, ID_Cliente, ID_Pagamento, ID_StatusPedido, id]
    );
    return result.affectedRows;
};

const deleteItensPedido = async (id) => {
    const [result] = await pool.query('DELETE FROM TBL_ItensPedido WHERE ID_ItensPedido = ?', [id]);
    return result.affectedRows;
};

module.exports = { getItensPedidos, getItensPedidoById, createItensPedido, updateItensPedido, deleteItensPedido };