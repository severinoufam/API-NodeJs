const http = require ('http'); //importando http p/ o projeto.
const app = require('./app');//resposta exportado de app.js
const port = process.env.PORT || 3000;//variavel p/ armazenar a porta do serviço.
const server = http.createServer(app);//criar serviço.
server.listen(port);//escuta a porta 3000.