const express = require('express');
const router = express.Router();
const pool = require('../config/database');

router.get('/', (req, res) => {
    res.render('relatorio', { title: 'Relatorio' });
});

// Rota para buscar dados com base na pesquisa
router.get('/:table/search', async (req, res) => {
    const table = req.params.table;
    const query = req.query.q;
    try {
        const [rows] = await pool.query(`SELECT * FROM TBL_${table} WHERE ID_${table} LIKE ?`, [`%${query}%`]);
        res.json(rows);
    } catch (err) {
        console.error(`Erro ao buscar dados da tabela ${table}:`, err);
        res.status(500).send('Erro ao buscar dados');
    }
});
 
// Rota para buscar todos os dados
router.get('/:table/all', async (req, res) => {
    const table = req.params.table;
    try {
        const [rows] = await pool.query(`SELECT * FROM TBL_${table}`);
        res.json(rows);
    } catch (err) {
        console.error(`Erro ao buscar todos os dados da tabela ${table}:`, err);
        res.status(500).send('Erro ao buscar dados');
    }
});
 
module.exports = router;
