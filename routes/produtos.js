const express = require('express');
const { router } = require('../app');

const routes = express.Routes();

router.get('/', (req, res, next) => {
    res.status(200).send({
        message: "Usando o get na rota de produtos"
    });
});

router.post('/', (resq, res, next) => {
    res.status(201).send({
        message: "Usando o get na rota de produtos"
    });
});

module.exports = router;