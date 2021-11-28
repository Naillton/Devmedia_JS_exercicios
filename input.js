import dados from 'readline-sync';
const nome = dados.question('Digite seu nome: ');

//console.log('Ola, '+ nome);

let idade = dados.question('Digite sua idade: ');
console.log(nome+" Voce tem "+idade+" anos de idade");

//em operacoes de subtracao, multiplicacao e divisao o js faz a operacao normalmente mas para a soma temos que transformar em number
//com o Number() conseguimos transformar as strings em numero como veremos abaixo

console.log("Vamos somar dois numeros!!");
let x = dados.question("Digite o valor de x: ");
let y = dados.question("Digite o valor de y: ");

let resultado = Number(x) + Number(y);

console.log("A soma dos numeros tem como valor "+resultado);