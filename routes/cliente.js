const express = require('express');
const router = express.Router();
const enderecoModel = require('../models/enderecoModels');
const pedidoModel = require('../models/pedidosModels');
const itensPedidoModel = require('../models/itensPedidosModels');
const estoqueModel = require('../models/estoqueModels');
const fazendaModel = require('../models/fazendaModels');
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

const getFazendasByClienteId = async (clienteId) => {
  try {
    // Aqui você deve adicionar a lógica para buscar as fazendas do cliente
    const fazendas = await fazendaModel.getFazendasByClienteId(clienteId);
  } catch (err) {
    console.error('Erro ao buscar fazendas:', err);
    throw err;
  }
};

const getSoftwaresByClienteId = async (id) => {
  try {
    result = await pedidoModel.getItensPedidoByCliente(id);
    const pedidos = [];
    for (const item of result) {
      const pedido = await itensPedidoModel.getItensPedidoByPedido(item.id);
      pedidos.push(pedido);
    }
    const softwares = [];
    for (const pedidoItem of pedidos) {
      const estoque = await estoqueModel.getEstoqueById(pedidoItem.estoqueId);
      softwares.push(estoque);
    }
    return softwares;
  } catch (err) {
    console.error('Erro ao buscar softwares:', err);
    throw err;
  }
};

router.get('/', async (req, res) => {
  const enderecoId = req.query.endereco;

  try { 
    if (enderecoId) {
      const endereco = await getEnderecoById(enderecoId);
      const fazendas = await getFazendasByClienteId(endereco.clienteId);
      const softwares = await getSoftwaresByClienteId(endereco.clienteId);
      res.render('cliente', { title: 'Cliente', endereco, fazendas, softwares });
    } else {
      res.render('cliente', { title: 'Cliente' });
    }
  } catch (err) {
    res.status(500).send('Erro interno do servidor.');
  }
});

module.exports = router;
