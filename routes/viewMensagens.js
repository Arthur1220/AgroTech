const express = require('express');
const router = express.Router();
const mensagemModel = require('../models/mensagensModels');

// Rota principal
router.get('/', async (req, res) => {
    try {
        const mensagens = await mensagemModel.getMensagens();
        res.render('viewMensagens', { title: 'Visualização de Mensagens', mensagens });
    } catch (err) {
        console.error('Erro ao buscar mensagens:', err);
        res.status(500).send('Erro ao buscar mensagens.');
    }
});
 
module.exports = router;
  