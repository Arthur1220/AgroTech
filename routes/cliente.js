const express = require('express');
const router = express.Router();
const enderecoModel = require('../models/enderecoModels');
const fazendaModel = require('../models/fazendaModels');
const softwareModel = require('../models/softwareModels');
const db = require('../config/database');
require('dotenv').config();

const getFazendasByClienteId = async (clienteId) => {
  try {
    const fazendas = await fazendaModel.getFazendaByClienteId(clienteId);
    return fazendas;
  } catch (err) {
    console.error('Erro ao buscar fazendas:', err);
    throw err;
  }
};

const getEnderecoById = async (id) => {
  try {
    const enderecos = await enderecoModel.getEnderecoById(id);
    return enderecos;
  } catch (err) {
    console.error('Erro ao buscar endereço:', err);
    throw err;
  }
};

const getSoftware = async (clienteId) => { // Adicionado clienteId como parâmetro
  try {
    const softwares = await softwareModel.getSoftwareByClienteId(clienteId);
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
      
      const softwares = await getSoftware(endereco.clienteId);
      
      res.render('cliente', { title: 'Cliente', endereco, fazendas, softwares });
    } else {
      res.render('cliente', { title: 'Cliente' });
    }
  } catch (err) {
    console.error('Erro ao processar a requisição:', err);
    res.status(500).send('Erro interno do servidor.');
  }
});

// Rota para obter fazendas
router.get('/fazendas', async (req, res) => {
  const clienteId = req.query.clienteId;

  try {
    const fazendas = await getFazendasByClienteId(clienteId);
    res.json(fazendas);
  } catch (err) {
    console.error('Erro ao buscar fazendas:', err);
    res.status(500).json({ error: 'Erro ao buscar fazendas' });
  }
});

// Rota para obter software
router.get('/softwares', async (req, res) => {
  const clienteId = req.query.clienteId;

  try {
    const softwares = await getSoftware(clienteId);
    res.json(softwares);
  } catch (err) {
    console.error('Erro ao buscar softwares:', err);
    res.status(500).json({ error: 'Erro ao buscar softwares' });
  }
});

// Rota para obter endereço
router.get('/endereco', async (req, res) => {
  const enderecoId = req.query.endereco;

  try {
    const endereco = await getEnderecoById(enderecoId);
    res.json(endereco);
  } catch (err) {
    console.error('Erro ao buscar endereço:', err);
    res.status(500).json({ error: 'Erro ao buscar endereço' });
  }
});

module.exports = router;
