const produtos = [
    {id: 1, nome: "Camisa do São Paulo", preco:"200", descricao:"Camisa do São Paulo"},
    {id: 1, nome: "Camisa do Barcelona", preco:"200", descricao:"Camisa do Barcelona"},
    {id: 1, nome: "Camisa do Psg", preco:"200", descricao:"Camisa do Psg"},
    {id: 1, nome: "camisa do Palmeiras", preco:"200", descricao:"Camisa do Palmeiras"},
    {id: 1, nome: "Camisa do Real Madrid", preco:"200", descricao:"Camisa do Real Madrid"},
    {id: 1, nome: "Camisa do Manchester City", preco:"200", descricao:"Camisa do Manchester City"},
    {id: 1, nome: "Camisa do Manchester United", preco:"200", descricao:"Camisa do"},
    {id: 1, nome: "Camisa do Liverpool", preco:"200", descricao:"Camisa do Liverpool"},
    {id: 1, nome: "Camisa do Bayern de Muniqiue", preco:"200", descricao:"Camisa do Bayern de Munique"},
    {id: 1, nome: "Camisa do Atletico de Madrid", preco:"200", descricao:"Camisa do Atletico de Madrid"}
  ]



for (let produto of produtos){
    console.log(produto)
  }
  
  
  function buscarProdutosPorId(id){
    const produto = produtos.find(produto => produto.id = id);
    return produto
  }
  
  
  let final = buscarProdutosPorId(2)
  console.log(final)