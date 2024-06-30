const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();
const enderecoModel = require('../models/enderecoModels');
const fazendaModel = require('../models/fazendaModels');
const pessoaModels = require('../models/pessoaModels');
const db = require('../config/database');
require('dotenv').config();

// Rota para a página de contato
router.get('/', (req, res) => {
  pessoaModels.getPessoa()
  .then(results => {
      const usuarios = results;
      res.render('cadastroFazenda', { title: 'Cadastrar Fazenda', usuarios });
  })
  .catch(err => {
      console.error(err);
  })

});

// Lida com o envio do formulário de contato
router.post('/', async (req, res) => {
  try {
    const { Usuario, NomeFazenda, CEP, NumeroResidencia, Cidade, Estado, Bairro, Logradouro, Complemento } = req.body;
    
    // Verificar se todos os campos necessários estão preenchidos
    if (!Usuario || !NomeFazenda || !CEP || !NumeroResidencia || !Cidade || !Estado || !Bairro || !Logradouro || !Complemento) {
      res.status(400).render('contato', { title: 'Contato', message: 'Todos os campos são obrigatórios.', messageType: 'error' });
      return;
    }

    // Armazenar as informações do formulário na tabela TBL_Mensagens do banco de dados
    const id_endereco = await enderecoModel.createEndereco({ Logradouro, NumeroResidencia, Bairro, Cidade, Estado, CEP});
    await fazendaModel.createFazenda({ NomeFazenda, Usuario, id_endereco });
    console.log('Dados do formulário armazenados com sucesso!');

 
  } catch (err) {
    console.error('Erro ao armazenar os dados do formulário: ' + err.stack);
    res.status(500).render('cadastroFazenda', { title: 'cadastroFazenda', message: 'Erro interno do servidor.', messageType: 'error' });
  }
});

module.exports = router;
