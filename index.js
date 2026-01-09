const express = require('express');
const app = express();
const port = 8080;

// Configuração do EJS
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});