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
  pessoaModels.getPessoaNome()
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
    console.log(req.body);
    const { Usuario, NomeFazenda, CEP, Numero, Cidade, Estado, Bairro, Logradouro } = req.body;
    
    // Verificar se todos os campos necessários estão preenchidos
    if (!Usuario || !NomeFazenda || !CEP || !Numero || !Cidade || !Estado || !Bairro || !Logradouro) {
      res.status(400).render('contato', { title: 'Contato', message: 'Todos os campos são obrigatórios.', messageType: 'error' });
      return;
    }

    // Armazenar as informações do formulário na tabela TBL_Mensagens do banco de dados
    const id_endereco = await enderecoModel.createEndereco({Usuario, Logradouro, Numero, Complemento, Bairro, Cidade, Estado, CEP});
    console.log(id_endereco)
    await fazendaModel.createFazenda({ NomeFazenda, Usuario, id_endereco });
    console.log('Dados do formulário armazenados com sucesso!');

 
  } catch (err) {
    console.error('Erro ao armazenar os dados do formulário: ' + err.stack);
    res.status(500).render('cadastroFazenda', { title: 'cadastroFazenda', message: 'Erro interno do servidor.', messageType: 'error' });
  }
});

module.exports = router;
