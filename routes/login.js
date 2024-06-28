const express = require('express');
const router = express.Router();
const pessoaModel = require('../models/pessoaModels'); 
const db = require('../config/database');

// Rota para a página de login
router.get('/', (req, res) => {
  res.render('login', { title: 'Login' });
});

// Lida com o envio do formulário de login
router.post('/', async (req, res) => {
  const { Email, Senha } = req.body;

  try {
    const results = await pessoaModel.getPessoaLogin(Email, Senha);

    if (results.length > 0) {
      // Credenciais corretas
      if (results[0].ID_TipoPessoa === 1) {
        return res.redirect('/cliente');
      } else if (results[0].ID_TipoPessoa === 2) {
        return res.redirect('/funcionario');
      } else {
        return res.send('Tipo de usuário inválido.');
      }
    } else {
      // Credenciais incorretas
      return res.send('Credenciais inválidas. Tente novamente.');
    }
  } catch (err) {
    console.error('Erro ao consultar o banco de dados: ' + err.stack);
    return res.status(500).send('Erro interno do servidor.');
  }
});

module.exports = router;
