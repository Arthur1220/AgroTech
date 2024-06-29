const pool = require('../config/database');

const getSoftware = async () => {
    const [rows] = await pool.query('SELECT * FROM TBL_Software');
    return rows;
}

const getSoftwareById = async (id) => {
    const [rows] = await pool.query('SELECT * FROM TBL_Software WHERE ID_Software = ?', [id]);
    return rows;
}

const createSoftware = async (software) => {
    const { Nome, Created_at, ID_Cliente, ID_Produto } = software;
    const [result] = await pool.query(
        'INSERT INTO TBL_Software (Nome, Created_at, ID_Cliente, ID_Produto) VALUES (?, ?, ?)',
        [Nome, Created_at, ID_Cliente, ID_Produto]
    );
    return result.insertId;
};

const updateSoftware = async (id, software) => {
    const { Nome, Created_at, ID_Cliente, ID_Produto } = software;
    const [result] = await pool.query(
        'UPDATE TBL_Software SET Nome = ?, Created_at = ?, ID_Cliente = ?, ID_Produto = ? WHERE ID_Software = ?',
        [Nome, Created_at, ID_Cliente, ID_Produto]
    );
    return result.affectedRows;
}

const deleteSoftware = async (id) => {
    const [result] = await pool.query('DELETE FROM TBL_Software WHERE ID_Software = ?', [id]);
    return result.affectedRows;
}

module.exports = { getSoftware, getSoftwareById, createSoftware, updateSoftware, deleteSoftware };