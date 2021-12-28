import {converteParaDolar, converteParaEuro} from "./funcao.js";

let real = 10
let caculoDolar = converteParaDolar(real);
let caculoEuro = converteParaEuro(real);

console.log("valor em dolar "+caculoDolar)
console.log("valor em euro "+caculoEuro)
console.log(caculoDolar+" e "+caculoEuro+" equivalem a "+real+" reais")