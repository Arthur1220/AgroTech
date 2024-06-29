const express = require('express');
const router = express.Router();
const suporteModel = require('../models/suporteModels');

// Rota principal
router.get('/', (req, res) => {
  res.render('pedidoSuporte', { title: 'Pedido de Suporte' });
});

router.post('/', async (req, res) => {
  const { Assunto, tipoSuporte, Mensagem, ID_Cliente } = req.body;

  if (!Assunto || !tipoSuporte || !Mensagem || !ID_Cliente) {
      return res.status(400).send('Todos os campos são obrigatórios.');
  }

  try {
      const Descricao = `${tipoSuporte} - ${Assunto} - ${Mensagem}`;
      console.log(Descricao);
      await suporteModel.createSuporte({
        Descricao,
        ID_Cliente
      });

      res.status(200).send('Pedido de suporte enviado com sucesso.');
  } catch (err) {
      console.error('Erro ao enviar pedido de suporte:', err);
      res.status(500).send('Erro interno do servidor.');
  }
});

module.exports = router;
