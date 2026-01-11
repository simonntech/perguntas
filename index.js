const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 8080;
const connection = require("./database/database");
const Pergunta = require("./database/Pergunta");
const Resposta = require("./database/Resposta");

// Teste de conexão com o banco de dados
connection
  .authenticate()
  .then(() => {
    console.log("Conexão com o banco de dados estabelecida com sucesso.");
  })
  .catch((error) => {
    console.error("Erro ao conectar ao banco de dados:", error);
  });

// Configuração do EJS
app.set("view engine", "ejs");
app.use(express.static("public"));

// Configuração do Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Rotas
app.get("/", (req, res) => {
  Pergunta.findAll({ raw: true, order: [["id", "DESC"]] }).then((perguntas) => {
    res.render("index", {
      perguntas: perguntas,
    });
  });
});

app.get("/perguntar", (req, res) => {
  res.render("perguntar");
});

app.post("/salvarpergunta", (req, res) => {
  // Lógica para salvar a pergunta no banco de dados
  const titulo = req.body.titulo;
  const descricao = req.body.descricao;
  // Salvando a pergunta no banco de dados
  Pergunta.create({
    titulo: titulo,
    descricao: descricao,
  }).then(() => {
    // Redirecionar para a página inicial após salvar
    res.redirect("/");
  });
});

app.get("/pergunta/:id", (req, res) => {
  const id = req.params.id;
  Pergunta.findOne({
    where: { id: id },
  }).then(pergunta => {
    if (pergunta != undefined) {
      res.render("pergunta", {
        pergunta: pergunta
      });
    } else { //Não encontrada
      res.redirect("/");
    }
  })
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
