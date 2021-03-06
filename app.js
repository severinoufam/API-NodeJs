//IMPORTES
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

//ROTAS REFERENCIADAS
const rotaProdutos = require('./routes/produtos');
const rotaPedidos = require('./routes/pedidos');

//LOG (DEV)
app.use(morgan('dev'));
//DIRETÓRIO DE IMG PUBLIC
app.use('/uploads', express.static('uploads'));
//Json
app.use(bodyParser.urlencoded({extended: false})); //apenas dados simples.
app.use(bodyParser.json()); //json de entrada no body.

//CORS
app.use((req, res, next) => {
    res.header('Acces-Control-Allow-Origin', '*');
    res.header(
        'Acces-Control-Allow-Header',
        'origin, X-Requested-With, Content-Type, Accest, Authorization'
    );

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).send({});
    }

    next();
});

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


