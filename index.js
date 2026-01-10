const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 8080;

// Configuração do EJS
app.set('view engine', 'ejs');
app.use(express.static('public'));
// Configuração do Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rotas
app.get('/', (req, res) => {
    res.render("index");
});

app.get("/perguntar", (req, res) => {
    res.render("perguntar");
});

app.post("/salvarpergunta", (req, res) => {
    // Lógica para salvar a pergunta no banco de dados
    res.send("Pergunta salva com sucesso!");
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});