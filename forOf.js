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

let produtos_array = [
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
}