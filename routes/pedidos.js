const express = require('express');//importa express.
const router =  express.Router();//requisição de rota.

//RETORNA TODOS OS PEDIDOS
router.get('/', (req, res, next) => {//resposta get.
    res.status(200).send({
        mensagem: 'Retorna os pedidos',
    });
});

//iNSERI UM PEDIDOS
router.post('/', (req, res, next) => {//resposta post.
    res.status(201).send({
        mensagem: 'O pedido foi criado',
    });
});

//RETORNA OS DADOS DE UM PEDIDO
router.get('/:id_pedido', (req, res, next) => {//responta de um ID especifico
    const id = req.params.id_pedido //pega o id especifico por parametro.
    res.status(200).send({
        mensagem: 'Detalhe do pedido',
        id_pedido: id //retorno pedido.
    });
});

//DELETA UM PEDIDO
router.delete('/', (req, res, next) => {//resposta delete.
    res.status(201).send({
        mensagem: 'Pedido deletado',
    });
});

module.exports = router;//exporta routes p/ dentro de app.js.