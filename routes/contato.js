const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();
const mensagensModel = require('../models/mensagensModels');
const db = require('../config/database');
require('dotenv').config();

// Rota para a página de contato
router.get('/', (req, res) => {
  res.render('contato', { 
      title: 'Contato',
  });
});

// Lida com o envio do formulário de contato
router.post('/', async (req, res) => {
  try {
    const { Nome, Email, DDD, Telefone, Mensagem } = req.body;

    // Verificar se todos os campos necessários estão preenchidos
    if (!Nome || !Email || !DDD || !Telefone || !Mensagem) {
      res.status(400).render('contato', { title: 'Contato', message: 'Todos os campos são obrigatórios.', messageType: 'error' });
      return;
    }

    // Armazenar as informações do formulário na tabela TBL_Mensagens do banco de dados
    await mensagensModel.createMensagem({ Nome, Email, DDD, Telefone, Mensagem });
    console.log('Dados do formulário armazenados com sucesso!: ');

    res.redirect('/');

    /*
    // Configurar o transporte de email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'agrotech.contact2358@gmail.com',
        pass:  process.env.EMAIL_PASSWORD // Substitua pela senha de aplicativo
      }
    });

    // Definir as opções do email
    const mailOptions = {
      from: 'agrotech_contact@gmail.com',
      to: 'agrotech_contact@gmail.com',
      subject: `Contato do formulário - ${Nome}`,
      text: `Nome: ${Nome}\nEmail: ${Email}\nTelefone: ${DDD} - ${Telefone}\nMensagem: ${Mensagem}`
    };

    // Enviar o email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.render('contato', { title: 'Contato', message: 'Ocorreu um erro ao enviar o email.', messageType: 'error' });
      } else {
        console.log('Email enviado: ' + info.response);
        res.render('contato', { title: 'Contato', message: 'Formulário enviado com sucesso!', messageType: 'success' });
      }
    });
  */
 
  } catch (err) {
    console.error('Erro ao armazenar os dados do formulário: ' + err.stack);
    res.status(500).render('contato', { title: 'Contato', message: 'Erro interno do servidor.', messageType: 'error' });
  }
});

module.exports = router;