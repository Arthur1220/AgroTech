const express = require('express');
const router = express.Router();
const db = require('../config/database');
const enderecoModel = require('../models/enderecoModels');
const pessoaModel = require('../models/pessoaModels');


// Rota principal
router.get('/', (req, res) => {
  res.render('cadastroUser', { title: 'AgroTech' });
});


router.post('/', async (req, res) => {
try{
    const { TipoUsuario , Nome, CPF, DataNascimento, Email, DDD, Telefone, Senha, CEP, NumeroResidencia, Cidade, Estado, Bairro, Logradouro} = req.body;

    console.log(TipoUsuario ,Nome ,CPF ,DataNascimento ,Email ,DDD ,Telefone ,Senha ,CEP ,NumeroResidencia ,Cidade ,Estado,Bairro,Logradouro);
    
    if (!TipoUsuario || !Nome || !CPF || !DataNascimento || !Email || !DDD || !Telefone || !Senha || !CEP || !NumeroResidencia || !Cidade || !Estado || !Bairro || !Logradouro) {
      res.status(400).render('cadastroUser', { title: 'Cadastro de Usuário', message: 'Todos os campos são obrigatórios.', messageType: 'error' });
      console.log('chegou aq')

      return;
    }
    const id_endereco = await enderecoModel.createEndereco({ Logradouro, NumeroResidencia, Bairro, Cidade, Estado, CEP});

    await pessoaModel.createPessoa({ Nome, CPF, DataNascimento, Email, Senha, Telefone, TipoUsuario, id_endereco });

    console.log('Dados do formulário armazenados com sucesso!');


} catch(err){
  console.error('Erro ao armazenar os dados do formulário: ' + err.stack);
  res.status(500).render('cadastroUser', { title: 'cadastroUser', message: 'Erro interno do servidor.', messageType: 'error' });
}
});

module.exports = router;
