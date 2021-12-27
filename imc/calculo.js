import {imc, state} from "./funcao.js"

let peso = 10
let altura = 1.80

let resultado = imc(peso, altura)
let stado = state(resultado);

console.log("O seu IMC e de "+resultado.toFixed(2)+ " e voce esta com "+ stado)