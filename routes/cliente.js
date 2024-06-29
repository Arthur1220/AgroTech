const express = require('express');
const router = express.Router();
const enderecoModel = require('../models/enderecoModels');
const fazendaModel = require('../models/fazendaModels');
const softwareModel = require('../models/softwareModels');
const db = require('../config/database');
require('dotenv').config();

const getEnderecoById = async (id) => {
  try {
    const enderecos = await enderecoModel.getEnderecoById(id);
    return enderecos;
  } catch (err) {
    console.error('Erro ao buscar endereço:', err);
    throw err;
  }
};

const getFazendasByClienteId = async (clienteId) => {
  try {
    // Aqui você deve adicionar a lógica para buscar as fazendas do cliente
    const fazendas = await fazendaModel.getFazendasByClienteId(clienteId);
    return fazendas;
  } catch (err) {
    console.error('Erro ao buscar fazendas:', err);
    throw err;
  }
};

const getSoftware = async () => {
  try {
    const softwares = await softwareModel.getSoftwareByClienteId();
    return softwares;
  } catch (err) {
    console.error('Erro ao buscar software:', err);
    throw err;
  }
}

router.get('/', async (req, res) => {
  const enderecoId = req.query.endereco;

  try { 
    if (enderecoId) {
      const endereco = await getEnderecoById(enderecoId);
      const fazendas = await getFazendasByClienteId(endereco.clienteId);
      const softwares = await getSoftware();
      res.render('cliente', { title: 'Cliente', endereco, fazendas, softwares });
    } else {
      res.render('cliente', { title: 'Cliente' });
    }
  } catch (err) {
    res.status(500).send('Erro interno do servidor.');
  }
});

module.exports = router;
