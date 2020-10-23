const express = require("express");
const app = express();
const port = 4000;

app.set('view engine', 'ejs'); // Estou dizendo para o Express usar o EJS como View engine.
app.use(express.static('public'));

app.get("/:nome/:lang", (req, res) => {
  // let nome = "Alessandro Lima";
  // let lang = "JavaScript";
  let nome = req.params.nome;
  let lang = req.params.lang;

  let exibirMsg = true;

  let produtos = [
    {nome: "Doritos", preco: 3.14},
    {nome: "Coca-cola", preco: 5.0},
    {nome: "Arroz", preco: 12.78},
    {nome: "Feijão", preco: 5.89},
    {nome: "Carne Kg", preco: 14.85}

  ];

  res.render("index", {
    nome: nome,
    lang: lang, 
    empresa: "Guia do programador",
    inscritos: 800,
    msg: exibirMsg,
    produtos: produtos

  });
});

app.get("/perfil", (req, res) => {
  res.render("principal/perfil");
});

app.listen(port, () => {
  console.log("App running!");
});



