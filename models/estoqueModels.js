const pool = require('../config/database');

const getEstoques = async () => {
    const [rows] = await pool.query('SELECT * FROM TBL_Estoque');
    return rows;
};

const getEstoqueById = async (id) => {
    const [rows] = await pool.query('SELECT * FROM TBL_Estoque WHERE ID_Estoque = ?', [id]);
    return rows;
};

const createEstoque = async (estoque) => {
    const { ID_Produto, Quantidade } = estoque;
    const [result] = await pool.query(
        'INSERT INTO TBL_Estoque (ID_Produto, Quantidade) VALUES (?, ?)',
        [ID_Produto, Quantidade]
    );
    return result.insertId;
};

const updateEstoque = async (id, estoque) => {
    const { ID_Produto, Quantidade } = estoque;
    const [result] = await pool.query(
        'UPDATE TBL_Estoque SET ID_Produto = ?, Quantidade = ? WHERE ID_Estoque = ?',
        [ID_Produto, Quantidade, id]
    );
    return result.affectedRows;
};

const deleteEstoque = async (id) => {
    const [result] = await pool.query('DELETE FROM TBL_Estoque WHERE ID_Estoque = ?', [id]);
    return result.affectedRows;
};

module.exports = { getEstoques, getEstoqueById, createEstoque, updateEstoque, deleteEstoque };