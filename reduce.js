//reduce, com o reduce poemos reduzir um array em um unico valor, esse valor pode ser um numero, uma string ou um objeto

const jogos = [
    {id: 1, nome: 'Galaxian', anoLancamento: 1979},
    {id: 2, nome: 'Donkey Kong', anoLancamento: 1981},
    {id: 3, nome: 'Ms. Pac-Man', anoLancamento: 1981},
    {id: 4, nome: 'Asteroids', anoLancamento: 1979}
];

function returnNome(nome, jogo){
    return nome + jogo.nome + ", ";
}

const nomeJogos = jogos.reduce(returnNome, '');

console.log(nomeJogos.slice(0, -2));

/////////////////////////////////////////////////////////////////////////////////

const itensCarrinho = [
    {id: 1, nome: 'Acucar', estoque: 100, ativo: true, valor: 2.00},
    {id: 2, nome: 'Alcool 70', estoque: 50, ativo: false, valor: 9.95},
    {id: 3, nome: 'Luvas descartaveis', estoque: 1000, ativo: true, valor: 2.50}
];

//com a funcao returnValor recebo dois parametros um itemCarrinho para acessar o estoque e os valores dos objetos
//e o parametro total que vai concatenar os valores
function returnValor(total, itemCarrinho){
    const valorTotal = itemCarrinho.estoque * itemCarrinho.valor;

    return total + valorTotal;
}

// com a constante carrinho eu recebo os valores do itensCarrinho e uso o reduce passando returnValor como parametro que e a nossa funcao
// em seguida passamos o valor 0 para que cada vez que o valor for somado ele ome com 0
const carrinho = itensCarrinho.reduce(returnValor, 0);

console.log(carrinho);