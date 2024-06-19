const express = require('express');
const router = express.Router();
const db = require('../config/database');

// Rota principal
router.get('/', (req, res) => {
  res.render('index', { title: 'AgroTech' });
});

module.exports = router;
