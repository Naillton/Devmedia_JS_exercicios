const carrinho = [
    {nome: 'The Legend of Zelda', quant: 1, valor: 250},
    {nome: 'Super Mario Kart 8', quant: 1, valor: 300},
    {nome: 'New Super Mario Bros.', quant: 1, valor: 250}
];

carrinho.forEach( function(produto, index){
    let nome = produto.nome+", "
    let quantidade = "UND: "+produto.quant+", "
    let valor = "R$"+produto.valor

    console.log(nome+quantidade+valor+"\n")
});
/////////////////////////////////////////////////////////////////////////////
//.map
carrinho.map( (jogos)=> console.log(jogos))

const jogos = [
    "Zelda",
    "The Last Of Us",
    "Mario",
    "Sonic",
    "Dragon Ball"
];

jogos.map( (jogo)=> console.log(jogo))
///////////////////////////////////////////////////
//.filter()

function barato(prod){
    return prod.valor <= 250

}
const produtos = carrinho.filter(barato)
console.log(produtos)