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
      const user = results[0];
      const data = {
        ID: user.ID_Cliente,
        Nome: user.Nome,
        CPF: user.CPF,
        Email: user.Email,
        Telefone: user.Telefone,
        Endereco: user.ID_Endereco,
        Tipo: user.ID_TipoPessoa
      };
      
      // Envia os dados do usuário como resposta JSON
      return res.json(data);
    } else {
      // Credenciais incorretas
      return res.status(401).json({ error: 'Credenciais inválidas. Tente novamente.' });
    }
  } catch (err) {
    console.error('Erro ao consultar o banco de dados: ' + err.stack);
    return res.status(500).json({ error: 'Erro interno do servidor.' });
  }
});

module.exports = router;