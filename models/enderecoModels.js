const pool = require('../config/database');

const getEnderecos = async () => {
    const [rows] = await pool.query('SELECT * FROM TBL_Endereco');
    return rows;
};

const getEnderecoById = async (id) => {
    const [rows] = await pool.query('SELECT * FROM TBL_Endereco WHERE ID_Endereco = ?', [id]);
    return rows;
}

const createEndereco = async (endereco) => {
    const { Logradouro, NumeroResidencia, Bairro, Cidade, Estado, CEP } = endereco;

    const [result] = await pool.query(
        'INSERT INTO TBL_Endereco (CEP, Estado, Cidade, Bairro, Rua, Numero) VALUES (?, ?, ?, ?, ?, ?)',
        [CEP, Estado, Cidade, Bairro, Logradouro, NumeroResidencia]
    );
    console.log(result);
    return result.insertId;
};

const updateEndereco = async (id, endereco) => {
    const { CEP, Estado, Cidade, Bairro, Rua, Numero } = endereco;
    const [result] = await pool.query(
        'UPDATE TBL_Endereco SET CEP = ?, Estado = ?, Cidade = ?, Bairro = ?, Rua = ?, Numero = ? WHERE ID_Endereco = ?',
        [CEP, Estado, Cidade, Bairro, Rua, Numero, id]
    );
    return result.affectedRows;
};

const deleteEndereco = async (id) => {
    const [result] = await pool.query('DELETE FROM TBL_Endereco WHERE ID_Endereco = ?', [id]);
    return result.affectedRows;
};

module.exports = { getEnderecos, getEnderecoById, createEndereco, updateEndereco, deleteEndereco };