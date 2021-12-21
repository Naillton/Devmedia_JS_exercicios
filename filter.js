//com a funcao filter() selecionamos os valores de um array e criamos um novo array com os selecionados
const produtos = [
    {id: 1, nome: 'Acucar', estoque: 100, ativo: true, valor: 2.00},
    {id: 2, nome: 'Alcool 70', estoque: 50, ativo: false, valor: 9.95},
    {id: 3, nome: 'Luvas descartaveis', estoque: 1000, ativo: true, valor: 2.50}
];

//Aqui como nas vezes anteriores criei uma funcao verificaAtivos que recebe prod como parametro e verifica quais prosutos estao ativos
function verificaAtivos(prod){
    return prod.ativo === true;
}

//apos isso com a constante proutosAtivos recebo os produtos e filtro com o filter passando a funcao e retornando os proutos ativos
const produtosAtivos = produtos.filter(verificaAtivos);

console.log(produtosAtivos);

/////////////////////////////////////////////////////////////////////////
const carros = [
    {marca: 'Fiat', modelo: 'Uno', ano: 2020},
    {marca: 'GM', modelo: 'Onix', ano: 2019},
    {marca: 'Ford', modelo: 'KA+', ano: 2020},
    {marca: 'Fiat', modelo: 'Cronos', ano: 2020}
];

//criando funcao para verificar quais carros sao do ano 2020
function verificaCarros(car){

    return car.ano === 2020;
}

//criando constante carrosVerificados que recebem o array filtrado pela funcao verificaCarros
const carrosVerificados = carros.filter(verificaCarros);

console.log(carrosVerificados);