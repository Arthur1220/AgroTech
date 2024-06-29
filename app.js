const express = require('express');
const path = require('path');
const app = express();
const indexRouter = require('./routes/index');
const db = require('./config/database');
const bodyParser = require('body-parser');

// Body parser middleware para lidar com dados do formulário
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configuração do EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rotas
app.use('/', indexRouter);
app.use('/contato', require('./routes/contato'));
app.use('/login', require('./routes/login'));
app.use('/cliente', require('./routes/cliente'));
app.use('/pedidoSuporte', require('./routes/pedidoSuporte'));
app.use('/viewSuporte', require('./routes/viewSuporte'));
app.use('/funcionario', require('./routes/funcionario'));

// Iniciar o servidor
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
