import dados from 'readline-sync'
console.log("Conversor de milhas para quilometro!");
let milhas = dados.question("Informe o valor em milhas: ")

let km = milhas * 1.609344;
console.log(milhas+" mi, equivalem a "+km+" km\n");

console.log("Conversor de celsius para kelvin!")
let celsius = dados.question("Informe a temperatura em celsius: ")
let kelvin = Number(celsius) + 273.15;
console.log("A temperatura de celsius trasnforma em kelvin e "+kelvin+" K\n")

console.log("Vamos calcular a area do triangulo!")
let base = dados.question("Informe a base do triangulo: ")
let altura = dados.question("informe a altura do triangulo: ")
let area = base * altura / 2;
console.log("A area do triangulo e: "+area);