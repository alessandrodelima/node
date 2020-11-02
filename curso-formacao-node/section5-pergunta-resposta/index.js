const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const Pergunta = require("./database/Pergunta");


connection
  .authenticate()
  .then(() => {
    console.log("Conexão feita com o banco de dados!");
  })
  .catch((msgErro) => {
    console.log("msgErro");
  });
const port = 4000;

app.set('view engine', 'ejs'); // Estou dizendo para o Express usar o EJS como View engine.
app.use(express.static('public'));
//body-parser 
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//routers
app.get("/", (req, res) => {
  Pergunta.findAll({ raw: true }).then(perguntas => {
    console.log(perguntas);
  });
  res.render("index");
});

app.get("/perguntar", (req, res) => {
  res.render("perguntar");
});

app.post("/saveQuestions", (req, res) => {
  let titulo = req.body.titulo;
  let descricao = req.body.descricao;
  //res.send("Formulário recebido! Titulo: "+ titulo + " Descrição: "+descricao);

  Pergunta.create({
    titulo: titulo,
    descricao: descricao
  }).then(() => {
    res.redirect("/");
  });
});

app.listen(port, () => {
  console.log("App running! Porta:", port);
});

