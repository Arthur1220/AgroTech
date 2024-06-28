const express = require('express');
const router = express.Router();
const db = require('../config/database');
require('dotenv').config();

router.get('/', (req, res) => {
  res.render('cliente', { title: 'Cliente' });
});

module.exports = router;
