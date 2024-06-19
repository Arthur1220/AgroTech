const express = require('express');
const router = express.Router();
const db = require('../config/database'); // Importa a conexão do banco de dados

// Rota para a página de contato
router.get('/', (req, res) => {
  res.render('login', { title: 'Login' });
});

// Lida com o envio do formulário de login
router.post('/', (req, res) => {

  const { Email, Senha } = req.body;

  // Consulta ao banco de dados para verificar as credenciais
  const query = 'SELECT * FROM TBL_Pessoa WHERE Email = ? AND Senha = ?';
  db.query(query, [Email, Senha], (err, results) => {
    if (err) {
      console.error('Erro ao consultar o banco de dados: ' + err.stack);
      res.status(500).send('Erro interno do servidor.');
      return;
    }

    if (results.length > 0) {
      // Credenciais corretas
      res.send('Login bem-sucedido!');
    } else {
      // Credenciais incorretas
      res.send('Credenciais inválidas. Tente novamente.');
    }
  });

});

module.exports = router;
