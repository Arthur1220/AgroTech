const express = require('express');
const router = express.Router();
const suporteModel = require('../models/suporteModels');

// Rota principal
router.get('/', async (req, res) => {
    try {
        const suportes = await suporteModel.getSuportes();
        res.render('viewSuporte', { title: 'Visualização de Suporte', suportes });
    } catch (err) {
        console.error('Erro ao buscar os suportes:', err);
        res.status(500).send('Erro ao buscar os suportes.');
    }
});

module.exports = router;
