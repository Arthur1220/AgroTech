const express = require('express');
const router = express.Router();
const db = require('../config/database');

// Rota principal
router.get('/', (req, res) => {
  res.render('pedidoSuporte', { title: 'Pedido de Suporte' });
});

module.exports = router;
 