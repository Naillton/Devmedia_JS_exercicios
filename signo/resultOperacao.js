import { somaNumeros, subtracaoNumeros } from "./operacao.js";

let num1 = 10;
let num2 = 10;

const soma = somaNumeros(num1, num2);
const subtracao = subtracaoNumeros(num1, num2);

console.log("A soma entre os numeros e: "+soma+"\n");
console.log("A subtracao entre os numeros e: "+subtracao);