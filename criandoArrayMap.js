//O array .map() nos permite criar um array apartir de outro array
const produtoCadastrados = [
    {id: 1, nome: 'Acucar', estoque: 100, valor: 2.00},
    {id: 2, nome: 'Alcool 70', estoque: 50, valor: 9.95},
    {id: 3, nome: 'Luvas descartaveis', estoque: 1000, valor: 2.50}
];

function retornaProduto(produto){
    const produtoExibicao = {
        nome: produto.nome,
        valor: produto.valor
    }
    return produtoExibicao;
}

//aqui ultilizamos a constante produtoExibicao para que ela receba o array produtoCadastrados.map onde ele executa a funcao retornaProduto
//e depois imprimimos o resultado
const produtoExibicao = produtoCadastrados.map(retornaProduto);

console.log(produtoExibicao);

/////////////////////////////////////////////////////////////

const carros = [
    {marca: 'Fiat', modelo: 'Uno'},
    {marca: 'GM', modelo: 'Onix'},
    {marca: 'Ford', modelo: 'KA+'},
    {marca: 'Fiat', modelo: 'Cronos'}
];

//nessa funcao nao usamos um objeto como na anterior
//aqui retornamos a marca e o modelo do carro
function retornaCarro(carro){
    return carro.marca+ ' ' + carro.modelo
}

//apos criar a constante newCars faremos ela receber o novo array carros.map() que
//executa a funcao retornaCarro
const newCars = carros.map(retornaCarro);

console.log(newCars);

//////////////////////////////////////////////////////////

//Outro exemplo e o array meses do ano
const meses = [
    "Janeiro", "Fevereiro", "Marco", "Abril",
    "Maio", "Junho", "Julho", "Agosto", "Setembro",
    "Outubro", "Novembro", "Dezembro"
];

//Aqui criamos a funcao shortMes que recebe mes como parametro
//e retorna mes.substr(0,3) uma funcao javascript que vai pegar as 3 primeiras letras de cada indice e retornalas
function shortMes(mes){
    return mes.substr(0,3)
}

//com a constante mesAbreviados , recuperamos os valores de meses.map(shortMes)
//que cria um array com os meses abreviados
const mesesAbreviados = meses.map(shortMes);

console.log(mesesAbreviados)