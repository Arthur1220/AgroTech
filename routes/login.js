const express = require('express');
const router = express.Router();
const pessoaModel = require('../models/pessoaModels'); 
const db = require('../config/database');

// Rota para a página de contato
router.get('/', (req, res) => {
  res.render('login', { title: 'Login' });
});

// Lida com o envio do formulário de login
router.post('/', (req, res) => {

  const { Email, Senha } = req.body;

  const login = pessoaModel.getPessoaLogin(Email, Senha);
  login.then(results => {
    if (results.length > 0) {
      // Credenciais corretas
      res.send('Login bem-sucedido!');
    } else {
      // Credenciais incorretas
      res.send('Credenciais inválidas. Tente novamente.');
    }
  }).catch(err => {

    console.error('Erro ao consultar o banco de dados: ' + err.stack);
    res.status(500).send('Erro interno do servidor.');
  });
});

module.exports = router;
