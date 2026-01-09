const express = require('express');
const app = express();
const port = 8080;

// Configuração do EJS
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const nome = "Simon";
    const idade = 35;
    res.render("index", {
        nome: nome,
        idade: idade,
        empresa: "Simon Tech",
    });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});