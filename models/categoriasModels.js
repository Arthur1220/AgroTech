const pool = require('../config/database');

const getCategorias = async () => {
    const [rows] = await pool.query('SELECT * FROM TBL_Categorias');
    return rows;
};

const getCategoriaById = async (id) => {
    const [rows] = await pool.query('SELECT * FROM TBL_Categorias WHERE ID_Categoria = ?', [id]);
    return rows;
}

const createCategoria = async (categoria) => {
    const { Nome } = categoria;
    const [result] = await pool.query(
        'INSERT INTO TBL_Categorias (Nome) VALUES (?)',
        [Nome]
    );
    return result.insertId;
};

const updateCategoria = async (id, categoria) => {
    const { Nome } = categoria;
    const [result] = await pool.query(
        'UPDATE TBL_Categorias SET Nome = ? WHERE ID_Categoria = ?',
        [Nome, id]
    );
    return result.affectedRows;
};

const deleteCategoria = async (id) => {
    const [result] = await pool.query('DELETE FROM TBL_Categorias WHERE ID_Categoria = ?', [id]);
    return result.affectedRows;
};

module.exports = { getCategorias, getCategoriaById, createCategoria, updateCategoria, deleteCategoria };