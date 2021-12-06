/* let numero = 3
let cont = 0

while(cont <= 10){

    let result = numero * cont

    console.log(numero+" * "+cont+" = "+result);

    //retirando o cont++ teremos o loop infinito
    //cont++
} */

/* let contador = 0;

let meses = ["Janeiro","Fevereiro","Marco","Abril"]

do {

    console.log(meses[contador])
    //retirando o contador temos o loop infinito
    //contador ++
}while(contador < meses.length) */

let doces = ["Batom", "M&Ms", "Ovo de Pascoa", "Nutella"];
//se usarmos o i++ o contador passara contando os valores
//se tirarmos o i++ ele fara o loop infinito
for(let i = 0; i < doces.length; i++){
    console.log(doces[i]);
}