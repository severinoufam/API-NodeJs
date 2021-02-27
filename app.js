//IMPORTES
const express = require('express');
const app = express();
const morgan = require('morgan');

//ROTAS REFERENCIADAS
const rotaProdutos = require('./routes/produtos');
const rotaPedidos = require('./routes/pedidos');

//LOG (DEV)
app.use(morgan('dev'));

//CHAMADA DE ROTAS
app.use('/produtos', rotaProdutos);
app.use('/pedidos', rotaPedidos);

//TRATAMENTO DE ERROS (ROTA)
app.use((req, res, next) => {
    const erro = new Error('Não encontrada');
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.message
        }
    });
});

module.exports = app; //exporta app p/. server.js.


