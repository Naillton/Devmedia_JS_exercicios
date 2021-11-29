let meses = [
    "Janeiro",
    "Fevereiro",
    "Marco",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"

];

let contador = 0;
   
while(contador < meses.length){
    if(meses[contador] === "Junho"){
        //console.log("\nEu sou brasileiro com muito orgulho com muito amor");
        contador++
    }else if(meses[contador] === "Dezembro"){
        //console.log("\nEm dezembro de 81 botou os ingleses na roda!!");
        contador++
    }else{
        //console.log("\n"+meses[contador])
        contador++
    }
}

let numeros = [10,8,0,9,5,6,200,56,7,13];

let pares = 0;
let impares = 0;
let cont = 0;

while(cont <= numeros.length){

    if(numeros[cont] % 2 === 0){
        console.log(numeros[cont]);
        pares++;
    }else{
        impares++;
    }

    cont++
}

console.log("Numeros pares = "+pares+"\n");

console.log("Numeros pares = "+impares+"\n");

let alunos = ["Marcos","Vinicius","Pedro","Nailton","Carlos"];

let contando = 0;

while(contando < alunos.length){

    //console.log("\nAlunos do ano = "+alunos[contando]);
    contando++
}