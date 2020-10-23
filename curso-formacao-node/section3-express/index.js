const express = require('express'); // importando o express como módulo.
const app = express(); // função que vai carregar todo o framework dentro da variável app.
const port = 4000;

app.get('/', function(req, res){
  res.send("<h1>Hello World!! Bem vindo ao guia do programador.</h1>"); //Enviando uma resposta. Detalhe, não pode deixar de enviar e não enviar mais de uma mensagem com o res.send
});

app.get('/blog', function(req, res) {
  res.send("Bem vindo ao meu blog!");
});

app.get('/canal/youtube', (req, res) => { // usando arrow function
  let canal = req.query["canal"];
  //res.send("<h1>Bem vindo ao meu canal!</h1>");
  if(canal) {
    res.send(canal);
  }else {
    res.send("Nenhum canal fornecido!")
  }
  res.send(canal);
});

app.get('/ola/:nome/:empresa', function(req, res) {
  //res.send("<h1> oi! </h1>");
  // req => Dados enviados pelo usuário
  // res => Resposta que va iser enviada para o usuário.
  let nome = req.params.nome;
  let empresa = req.params.empresa;
  res.send("<h1>Oi " + nome + " do "+ empresa +"</h1>");
});


app.get('/aba/:opcional?', function(req, res) {
  let opcional = req.params.opcional;
  if(opcional) {
    res.send("<h2>O parametro opcional é opcional! você acabou de usá-lo" + opcional + "</h2>");
  }else {
    res.send("O parametro opcional é opcional! Você não usou.");
  }
});


app.listen(port, function (error) { // função é chamada sempre que o servidor é iniciado. 
    if(error) {
      console.log("Ocorreu um erro!");
    }else {
      console.log("Servidor iniciado com sucesso!");
    }
});




//Cannot GET / --> esse erro acontece no navegador é porque não existe uma rota. 





















/*

const app = express()
const port = 3000


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

*/