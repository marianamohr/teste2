const express = require('express');
const app = express();

app.use('/certificados', (req, res, next) => {
    res.status(200).send({
        certificados: [
            {
                "id": 1,
                "username": "joaos", //obrigatório e único, permitindo caracteres `a-z` e `0-9` e máximo de caracteres deve ser 30
                "name": "João da Silva", //obrigatório e máximo de caracteres deve ser 255
                "description": "",
                "groups": [15],
                "expiration": 10, //representa o número de dias que o certificado é valido, o número deve estar entre 10 e 3650.
                "expirated_at": "2020-10-21T13:45:11-03:00", //preenche com a data calculda com base no valor informado no campo expiration, não é cadastrado e nem editado
                "created_at": "2020-10-21T13:45:11-03:00", //preenche com a data atual quando esta criando o certificado
                "updated_at": "2020-10-21T13:45:11-03:00" //preenche com a data atual quando esta modificando o certificado
            },
            {
                "id": 2,
                "username": "marias", //obrigatório e único, permitindo caracteres `a-z` e `0-9` e máximo de caracteres deve ser 30
                "name": "Maria da Silva", //obrigatório e máximo de caracteres deve ser 255
                "description": "",
                "groups": [15],
                "expiration": 10, //representa o número de dias que o certificado é valido, o número deve estar entre 10 e 3650.
                "expirated_at": "2020-10-21T13:45:11-03:00", //preenche com a data calculda com base no valor informado no campo expiration, não é cadastrado e nem editado
                "created_at": "2020-10-21T13:45:11-03:00", //preenche com a data atual quando esta criando o certificado
                "updated_at": "2020-10-21T13:45:11-03:00" //preenche com a data atual quando esta modificando o certificado
            },
        ]
    })
});



app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Header', 
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods','PUT', 'POST', 'PATCH', 'DELETE', 'GET');
        return res.status(200).send({});
    }
    next();
});

module.exports = app;