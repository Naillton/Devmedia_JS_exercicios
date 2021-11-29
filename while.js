let numero = 5;
let contador = 0;

//console.log("A tabuada de: "+numero);

while(contador <= 10){

    let resultado = numero * contador;
    //console.log("\n"+numero + " * "+ contador +" = "+resultado);
    contador++
}

let capital_emprestado = 3000;
let taxa_juros = 0.02;

let cont = 4;
let parcelas_totais = 5;

while (cont <= parcelas_totais){
    
    let numero_parcela = cont;

    let juros_emprestimo = capital_emprestado * taxa_juros * numero_parcela;

    //console.log("\nA taxa de juros no periodo de " + numero_parcela + " mes(es) e de R$" + juros_emprestimo + ",00");
    cont++
}

let number = 10;

while(number >= 0){
    console.log("\n"+number );
    number --;
}
