const pool = require('../config/database');

const getFazendas = async () => {
    const [rows] = await pool.query('SELECT * FROM TBL_Fazenda');
    return rows;
};

const getFazendaById = async (id) => {
    const [rows] = await pool.query('SELECT * FROM TBL_Fazenda WHERE ID_Fazenda = ?', [id]);
    return rows;
};

const createFazenda = async (fazenda) => {
    const { Nome, ID_Cliente, ID_Endereco } = fazenda;
    const Created_at = new Date();
    const [result] = await pool.query(
        'INSERT INTO TBL_Fazenda (Nome, Created_at, ID_Cliente, ID_Endereco) VALUES (?, ?, ?, ?)',
        [Nome, Created_at, ID_Cliente, ID_Endereco]
    );
    return result.insertId;
};

const updateFazenda = async (id, fazenda) => {
    const { Nome, Created_at, ID_Cliente, ID_Endereco } = fazenda;
    const [result] = await pool.query(
        'UPDATE TBL_Fazenda SET Nome = ?, Created_at = ?, ID_Cliente = ?, ID_Endereco = ? WHERE ID_Fazenda = ?',
        [Nome, Created_at, ID_Cliente, ID_Endereco, id]
    );
    return result.affectedRows;
};

const deleteFazenda = async (id) => {
    const [result] = await pool.query('DELETE FROM TBL_Fazenda WHERE ID_Fazenda = ?', [id]);
    return result.affectedRows;
};

module.exports = { getFazendas, getFazendaById, createFazenda, updateFazenda, deleteFazenda };