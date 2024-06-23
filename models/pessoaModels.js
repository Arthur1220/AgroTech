const pool = require('../config/db');

const getPedidos = async () => {
    const [rows] = await pool.query('SELECT * FROM TBL_Pedido');
    return rows;
};

const getPedidoById = async (id) => {
    const [rows] = await pool.query('SELECT * FROM TBL_Pedido WHERE ID_Pedido = ?', [id]);
    return rows;
};

const createPedido = async (pedido) => {
    const { Nome, CPF, DataNascimento, Email, Senha, Telefone, Created_at, Login_at, ID_TipoPessoa, ID_Endereco } = pedido;
    const [result] = await pool.query(
        'INSERT INTO TBL_Pedido (Nome, CPF, DataNascimento, Email, Senha, Telefone, Created_at, Login_at, ID_TipoPessoa, ID_Endereco) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [Nome, CPF, DataNascimento, Email, Senha, Telefone, Created_at, Login_at, ID_TipoPessoa, ID_Endereco]
    );
    return result.insertId;
};

const updatePedido = async (id, pedido) => {
    const { Nome, CPF, DataNascimento, Email, Senha, Telefone, Created_at, Login_at, ID_TipoPessoa, ID_Endereco } = pedido;
    const [result] = await pool.query(
        'UPDATE TBL_Pedido SET Nome = ?, CPF = ?, DataNascimento = ?, Email = ?, Senha = ?, Telefone = ?, Created_at = ?, Login_at = ?, ID_TipoPessoa = ?, ID_Endereco = ? WHERE ID_Pedido = ?',
        [Nome, CPF, DataNascimento, Email, Senha, Telefone, Created_at, Login_at, ID_TipoPessoa, ID_Endereco, id]
    );
    return result.affectedRows;
};

const deletePedido = async (id) => {
    const [result] = await pool.query('DELETE FROM TBL_Pedido WHERE ID_Pedido = ?', [id]);
    return result.affectedRows;
};

module.exports = { getPedidos, getPedidoById, createPedido, updatePedido, deletePedido };