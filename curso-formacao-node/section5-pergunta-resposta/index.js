const express = require("express");
const app = express();
const port = 4000;

app.set('view engine', 'ejs'); // Estou dizendo para o Express usar o EJS como View engine.
app.use(express.static('public'));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/perguntar", (req, res) => {
  res.render("perguntar");
});

app.listen(port, () => {
  console.log("App running!");
});



