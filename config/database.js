const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '415273869',
  database: process.env.DB_NAME || 'AgroTech',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

pool.getConnection()
  .then(connection => {
    console.log('Conectado ao banco de dados MySQL!');
    connection.release(); // Libera a conexão de volta para o pool
  })
  .catch(err => {
    console.error('Erro ao conectar ao banco de dados MySQL:', err);
  });

module.exports = pool;
