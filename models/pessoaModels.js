const pool = require('../config/database');

const getPessoa = async () => {
    const [rows] = await pool.query('SELECT * FROM TBL_Pessoa');
    return rows;
}

const getPessoaById = async (id) => {
    const [rows] = await pool.query('SELECT * FROM TBL_Pessoa WHERE ID_Pessoa = ?', [id]);
    return rows;
}


const getPessoaLogin = async (email, senha) => {
    const [rows] = await pool.query('SELECT * FROM TBL_Pessoa WHERE Email = ? AND Senha = ?', [email, senha]);
    return rows;
}

const createPessoa = async (pessoa) => {
    const { Nome, CPF, DataNascimento, Email, Senha, Telefone, TipoUsuario, id_endereco } = pessoa;
    const [result] = await pool.query(
        'INSERT INTO TBL_Pessoa (Nome, CPF, DataNascimento, Email, Senha, Telefone, ID_TipoPessoa, ID_Endereco) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [Nome, CPF, DataNascimento, Email, Senha, Telefone, TipoUsuario, id_endereco]
    );
    return result.insertId;
}

const updatePessoa = async (id, pessoa) => {
    const { Nome, CPF, Email, Telefone, Endereco, ID_TipoPessoa } = pessoa;
    const [result] = await pool.query(
        'UPDATE TBL_Pessoa SET Nome = ?, CPF = ?, Email = ?, Telefone = ?, Endereco = ?, ID_TipoPessoa = ? WHERE ID_Pessoa = ?',
        [Nome, CPF, Email, Telefone, Endereco, ID_TipoPessoa, id]
    );
    return result.affectedRows;
}

const deletePessoa = async (id) => {
    const [result] = await pool.query('DELETE FROM TBL_Pessoa WHERE ID_Pessoa = ?', [id]);
    return result.affectedRows;
}

module.exports = { getPessoa, getPessoaById, getPessoaLogin, createPessoa, updatePessoa, deletePessoa };