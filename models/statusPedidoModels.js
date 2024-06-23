const pool = require('../config/db');

const getStatusPedidos = async () => {
  const [rows] = await pool.query('SELECT * FROM TBL_StatusPedido');
  return rows;
};

const getStatusPedidoById = async (id) => {
  const [rows] = await pool.query('SELECT * FROM TBL_StatusPedido WHERE ID_StatusPedido = ?', [id]);
  return rows;
}

const createStatusPedido = async (statusPedido) => {
  const { Nome } = statusPedido;
  const [result] = await pool.query(
    'INSERT INTO TBL_StatusPedido (Nome) VALUES (?)',
    [Nome]
  );
  return result.insertId;
};

const updateStatusPedido = async (id, statusPedido) => {
    const { Nome } = statusPedido;
    const [result] = await pool.query(
      'UPDATE TBL_StatusPedido SET Nome = ? WHERE ID_StatusPedido = ?',
      [Nome, id]
    );
    return result.affectedRows;
};

const deleteStatusPedido = async (id) => {
    const [result] = await pool.query('DELETE FROM TBL_StatusPedido WHERE ID_StatusPedido = ?', [id]);
    return result.affectedRows;
};

module.exports = { getStatusPedidos, getStatusPedidoById, createStatusPedido, updateStatusPedido, deleteStatusPedido};