//com o forEach() percorremos cada elemento de um array e conseguimos executar uma funcao para cada elemento
const produtos = [
    {id: 1, nome: 'Acucar', estoque: 100, valor: 2.00},
    {id: 2, nome: 'Alcool 70', estoque: 50, valor: 9.95},
    {id: 3, nome: 'Luvas Descartaveis', estoque: 1000, valor: 2.50}
];

function imprimir(produto){
    let prod = produto.nome
    console.log(prod+": "+produto.estoque)
}

produtos.forEach(imprimir);

///////////////////////////////////////////////////

const carrinho = [
    {nome: 'The legend of zelda', qnt: 1, valor: 250},
    {nome: 'Super Mario Kart 8', qnt: 1, valor: 300},
    {nome: 'New Super Mario Bros.', qnt: 1, valor: 250}
];

function imprimirCarrinho(produto){
    let nome = produto.nome+" - ";
    let quant = "Und: "+produto.qnt+" ";
    let value = "R$"+produto.valor;

    console.log(nome+quant+value);
}

carrinho.forEach(imprimirCarrinho);