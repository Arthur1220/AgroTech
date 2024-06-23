const pool = require('../config/database');

const getMensagens = async () => {
    const [rows] = await pool.query('SELECT * FROM TBL_Mensagens');
    return rows;
}

const getMensagemById = async (id) => {
    const [rows] = await pool.query('SELECT * FROM TBL_Mensagens WHERE ID_Mensagem = ?', [id]);
    return rows;
}

const createMensagem = async (mensagem) => {
    const { Nome, Email, DDD, Telefone, Mensagem } = mensagem;
    const [result] = await pool.query(
        'INSERT INTO TBL_Mensagens (Nome, Email, DDD, Telefone, Mensagem) VALUES (?, ?, ?, ?, ?)',
        [Nome, Email, DDD, Telefone, Mensagem]
    );
    return result.insertId;
};

const updateMensagem = async (id, mensagem) => {
    const { ID_Usuario, ID_Chat, Mensagem } = mensagem;
    const [result] = await pool.query(
        'UPDATE TBL_Mensagens SET Nome = ?, Email = ?, DDD = ?, Telefone = ?, Mensagem = ? WHERE ID_Mensagem = ?',
        [Nome, Email, DDD, Telefone, Mensagem]
    );
    return result.affectedRows;
};

const deleteMensagem = async (id) => {
    const [result] = await pool.query('DELETE FROM TBL_Mensagens WHERE ID_Mensagem = ?', [id]);
    return result.affectedRows;
};

module.exports = { getMensagens, getMensagemById, createMensagem, updateMensagem, deleteMensagem };