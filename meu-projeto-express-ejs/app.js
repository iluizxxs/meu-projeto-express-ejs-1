const express = require('express');
const app = express();
const port = 3000;

const produtos = [
  {id: 1, nome: "", preco:"", descricao:""},
  {id: 1, nome: "", preco:"", descricao:""},
  {id: 1, nome: "", preco:"", descricao:""},
  {id: 1, nome: "", preco:"", descricao:""},
  {id: 1, nome: "", preco:"", descricao:""},
  {id: 1, nome: "", preco:"", descricao:""},
  {id: 1, nome: "", preco:"", descricao:""},
  {id: 1, nome: "", preco:"", descricao:""},
  {id: 1, nome: "", preco:"", descricao:""},
  {id: 1, nome: "", preco:"", descricao:""}
]

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { message: 'Mercado 1000 em 1!' });
});

app.get('/produtos', (req, res) => {
  res.render('produtos', { message: 'Mercado 1000 em 1!' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});