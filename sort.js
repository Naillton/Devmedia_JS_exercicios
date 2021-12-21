//com a funcao sort() conseguimos ordenar um array de frutas
const frutas = ["Banana", "Maca", "Abacaxi", "Uva", "Pera"]

console.log("\nArray de frutas\n");
console.info(frutas)

console.log("\nArray de frutas Ordenadas\n")
frutas.sort()
console.log(frutas)
//////////////////////////////////////////////////////////////////////
//ordenando um array de numeros
//o array em ordenacao de numeros nem sempre sai como esperado pois ele compara o primeiro numero
//no caso 3, 10, 2 o 10 vira primeiro pois comeca com 1
const number = [8, 4, 3, 2, 5, 7, 6, 1, 10]

console.log("\nOrdenando Array de numeros de forma errada\n");
number.sort()
console.log(number)
//Ordenando array de numeros de forma certa
//com a funcao ordenaNumero nos conseguimos comparar os valores dos parametros a e b
//por exemplo se A: 1 e B: 10 a -b = -9 um numero negativo, entao 1 vira primeiro que 10
function ordenaNumeros(a, b){
    //ordenando na ordem crescente
    /* console.log("A: "+a);
    console.log("B: "+b);
    console.log('') */
    return a - b;
    //ordenando na ordem decrescente
    //return b - a;
}

console.log("\nOrdenando array de numeros\n")
number.sort(ordenaNumeros);
console.log(number);

//ordenando array de objetos, a forma como ordenamos os objetos e semelhante a forma como ordenamos o array numerico

let tabela = [
    {equipe: 'Time Azul', pontos: 25 },
    {equipe: 'Time Verde', pontos: 47 },
    {equipe: 'Time Amarelo', pontos: 39 },
    {equipe: 'Time Vermelho', pontos: 16 },
];

function order(a, b){
    return a.pontos - b.pontos
}

console.log("\nArray nao ordenado");
console.log(tabela);

console.log("\nArray ordenado\n");
tabela.sort(order);
console.log(tabela);