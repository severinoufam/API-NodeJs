const express = require('express');//importa express.
const router =  express.Router();//requisição de rota.

//RETORNA TODOS OS PRODUTOS
router.get('/', (req, res, next) => {//resposta get.
    res.status(200).send({
        mensagem: 'Retorna todos os produtos',
    });
});

//iNSERI UM PRODUTO
router.post('/', (req, res, next) => {//resposta post.
    res.status(201).send({
        mensagem: 'Insere um produto',
    });
});

//RETORNA OS DADOS DE UM PRODUTO
router.get('/:id_produto', (req, res, next) => {//responta de um ID especifico
    const id = req.params.id_produto //pega o id especifico por parametro.

    if (id === 'especial') {
        res.status(200).send({
            mensagem: 'Usando o GET de um ID especifico',
            id: id //retorno.
        });
    } else {
        res.status(200).send({
            mensagem: 'Você passou um id',
        });
    }

});

//ALTERA UM PRODUTO
router.patch('/', (req, res, next) => {//resposta patch.
    res.status(201).send({
        mensagem: 'Altera um produto',
    });
});

//DELETA UM PRODUTO
router.delete('/', (req, res, next) => {//resposta delete.
    res.status(201).send({
        mensagem: 'Deleta um produto',
    });
});

module.exports = router;//exporta routes p/ dentro de app.js.