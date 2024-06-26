const pool = require('../config/database');

const getItensPedidos = async () => {
    const [rows] = await pool.query('SELECT * FROM TBL_ItensPedidos');
    return rows;
};

const getItensPedidoById = async (id) => {
    const [rows] = await pool.query('SELECT * FROM TBL_ItensPedidos WHERE ID_ItensPedido = ?', [id]);
    return rows;
};

const createItensPedido = async (itensPedido) => {
    const { Quantidade, PrecoUnitario, ID_Pedido, ID_Estoque } = itensPedido;
    const [result] = await pool.query(
        'INSERT INTO TBL_ItensPedidos (Quantidade, PrecoUnitario, ID_Pedido, ID_Estoque) VALUES (?, ?, ?, ?)',
        [Quantidade, PrecoUnitario, ID_Pedido, ID_Estoque]
    );
    return result.insertId;
};

const updateItensPedido = async (id, itensPedido) => {
    const { Quantidade, PrecoUnitario, ID_Pedido, ID_Estoque } = itensPedido;
    const [result] = await pool.query(
        'UPDATE TBL_ItensPedidos SET Quantidade = ?, PrecoUnitario = ?, ID_Pedido = ?, ID_Estoque = ? WHERE ID_ItensPedido = ?',
        [Quantidade, PrecoUnitario, ID_Pedido, ID_Estoque, id]
    );
    return result.affectedRows;
};

const deleteItensPedido = async (id) => {
    const [result] = await pool.query('DELETE FROM TBL_ItensPedidos WHERE ID_ItensPedido = ?', [id]);
    return result.affectedRows;
};

module.exports = { getItensPedidos, getItensPedidoById, createItensPedido, updateItensPedido, deleteItensPedido };