const pool = require('../config/db');

const getProdutos = async () => {
  const [rows] = await pool.query('SELECT * FROM TBL_Produtos');
  return rows;
};

const getProdutoById = async (id) => {
    const [rows] = await pool.query('SELECT * FROM TBL_Produtos WHERE ID_Produto = ?', [id]);
    return rows;
};

const createProduto = async (produto) => {
  const { Nome, Descricao, Preco } = produto;
  const [result] = await pool.query(
    'INSERT INTO TBL_Produtos (Nome, Descricao, Preco) VALUES (?, ?, ?)',
    [Nome, Descricao, Preco]
  );
  return result.insertId;
};

const updateProduto = async (id, produto) => {
    const { Nome, Descricao, Preco } = produto;
    const [result] = await pool.query(
      'UPDATE TBL_Produtos SET Nome = ?, Descricao = ?, Preco = ? WHERE ID_Produto = ?',
      [Nome, Descricao, Preco, id]
    );
    return result.affectedRows;
};

const deleteProduto = async (id) => {
    const [result] = await pool.query('DELETE FROM TBL_Produtos WHERE ID_Produto = ?', [id]);
    return result.affectedRows;
};

module.exports = { getProdutos, createProduto, getProdutoById, updateProduto, deleteProduto};