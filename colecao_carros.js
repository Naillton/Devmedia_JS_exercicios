import readlineSync from 'readline-sync';

let colecao_carros = [
    {id: 1, nome: "Lancer Evolution"},
    {id: 2, nome: "350z"},
    {id: 3, nome: "Skyline GT-R"},
    {id: 4, nome: "206"}
];

console.log("\n1 - Lancer Evolution");
console.log("2 - 350z");
console.log("3 - Skyline GT-R");
console.log("4 - 206");

let escolha_carro = readlineSync.question("\nDigite o id do carro que deseja: ");

console.log("\nVocê escolheu o carro: "+colecao_carros[escolha_carro-1].nome);