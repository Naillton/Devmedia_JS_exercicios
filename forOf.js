/* let clientes = [
    {Nome: "Marcos", Telefone: "99999-0099"},
    {Nome: "Sergio", Telefone: "98989-1099"},
    {Nome: "Carlos", Telefone: "90969-2299"}
]

for(let client of clientes){
    let nome = client.Nome;
    let numero = client.Telefone;

    console.log("Nome: "+ nome +" Telefone: "+ numero);
} */

/* let produtos_array = [
    { id: 1, nome: "mouse", preco: 50 },
    { id: 2, nome: "teclado", preco: 90 },
    { id: 3, nome: "monitor", preco: 350 },
    { id: 4, nome: "nobreak", preco: 600 },
];

for(let prod of produtos_array){

    let nome = prod.nome
    let preco = prod.preco

    let desconto = 10;

    let price = (preco * desconto) / 100
    let preco_desconto = preco - price;

    console.log("Nome: "+nome+" Preco: "+preco+" com 10% de desconto: "+ preco_desconto);
} */

let notas_aluno = [8, 9, 9, 10];

let provas = notas_aluno.length;
let soma = 0

for(let value of notas_aluno){
    
    soma += value
}

let media = soma / provas;

if(media <= 6.9){
    console.log("Sua media e: "+media+" voce esta em recuperacao");
}else if(media === 7){
    console.log("Sua media e: "+media+" voce esta aprovado por media");
}else if(media > 7.1 && media < 8.9){
    console.log("Sua media e: "+media+" voce esta aprovado com meritos");
}else{
    console.log("Sua media e: "+media+" voce esta aprovado com louvor");
}