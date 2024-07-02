const express = require('express');
const router = express.Router();
const suporteModel = require('../models/suporteModels');

// Rota principal
router.get('/', (req, res) => {
  res.render('pedidoSuporte', { title: 'Pedido de Suporte' });
});

router.post('/', async (req, res) => {
  const { Assunto, tipoSuporte, Mensagem, idUsuario } = req.body;

  if (!Assunto || !tipoSuporte || !Mensagem || !idUsuario) {
      return res.status(400).send('Todos os campos são obrigatórios.');
  }

  try {
      let tipoSuporteDescricao;

      if (tipoSuporte == '1') {
        tipoSuporteDescricao = 'Suporte Tecnico';
      } else if (tipoSuporte == '2') {
        tipoSuporteDescricao = 'Suporte Administrativo';
      } else if (tipoSuporte == '3') {
        tipoSuporteDescricao = 'Suporte Financeiro';
      } else if (tipoSuporte == '4') {
        tipoSuporteDescricao = 'Suporte de Vendas';
      } else if (tipoSuporte == '5') {
        tipoSuporteDescricao = 'Suporte de Informacoes Pessoais';
      } else if (tipoSuporte == '6') {
        tipoSuporteDescricao = 'Suporte de Compras';
      } else if (tipoSuporte == '7') {
        tipoSuporteDescricao = 'Outro';
      }

      const Descricao = `${tipoSuporteDescricao} - ${Assunto} - ${Mensagem}`;
      await suporteModel.createSuporte({
        Descricao,
        ID_Cliente: idUsuario
      });

      res.redirect('/cliente');
  } catch (err) {
      console.error('Erro ao enviar pedido de suporte:', err);
  }
});

module.exports = router;
