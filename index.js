const express = require('express');
const app = express();
const port = 8080;

// Configuração do EJS
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/:nome/:idade/:empresa', (req, res) => {
    const nome = req.params.nome;
    const idade = req.params.idade;
    const empresa = req.params.empresa;

    const exibirMsg = false;

    const produtos = [
        { nome: "Notebook", preco: 2500 },
        { nome: "Smartphone", preco: 1500 },
        { nome: "Tablet", preco: 800 },
        { nome: "Monitor", preco: 1200 },
        { nome: "Teclado", preco: 200 }
    ];

    res.render("index", {
        nome: nome,
        idade: idade,
        empresa: empresa,
        msg: exibirMsg,
        produtos: produtos
    });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});