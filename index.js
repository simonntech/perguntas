const express = require('express');
const app = express();
const port = 8080;

// Configuração do EJS
app.set('view engine', 'ejs');

app.get('/:nome/:idade/:empresa', (req, res) => {
    const nome = req.params.nome;
    const idade = req.params.idade;
    const empresa = req.params.empresa;

    const exibirMsg = true;

    res.render("index", {
        nome: nome,
        idade: idade,
        empresa: empresa,
        msg: exibirMsg
    });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});