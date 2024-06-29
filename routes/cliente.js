const express = require('express');
const router = express.Router();
const enderecoModel = require('../models/enderecoModels');
const db = require('../config/database');
require('dotenv').config();

const getEnderecoById = async (id) => {
  try {
    result = await enderecoModel.getEnderecoById(id);
  } catch (err) {
    console.error('Erro ao buscar endereço:', err);
    throw err;
  }
};

router.get('/', async (req, res) => {
  const enderecoId = req.query.endereco;

  try {
    if (enderecoId) {
      const endereco = await getEnderecoById(enderecoId);
      res.render('cliente', { title: 'Cliente', endereco });
    } else {
      res.render('cliente', { title: 'Cliente' });
    }
  } catch (err) {
    res.status(500).send('Erro interno do servidor.');
  }
});

module.exports = router;
