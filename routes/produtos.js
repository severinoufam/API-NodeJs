//IMPORTES
const express = require('express');
const router = express.Router();

//RETORNA TODOS OS PRODUTOS
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorna todos os produtos',
    });
});

//iNSERI UM PRODUTO
router.post('/', (req, res, next) => {
    const produto = {
        nome: req.body.nome,
        preco: req.body.preco
    }
    res.status(201).send({
        mensagem: 'Insere um produto',
        produtoCriado: produto
    });
});

//RETORNA OS DADOS DE UM PRODUTO
router.get('/:id_produto', (req, res, next) => {
    const id = req.params.id_produto //pega o id especifico por parametro.

    if (id === 'especial') {
        res.status(200).send({
            mensagem: 'Usando o GET de um ID especifico',
            id: id //retorno produto.
        });
    } else {
        res.status(200).send({
            mensagem: 'Você passou um id',
        });
    }

});

//ALTERA UM PRODUTO
router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Altera um produto',
    });
});

//DELETA UM PRODUTO
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Deleta um produto',
    });
});

module.exports = router;//exporta routes p/ dentro de app.js.