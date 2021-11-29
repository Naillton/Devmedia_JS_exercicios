
// for(let contador = 0; contador <= 10; contador++){
//     let resultado = contador * numero;
//     console.log(numero+" * "+contador+" = "+resultado+"\n");
// }

// let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

// console.log("\nOs meses do ano sao \n");

// for(let contador = 0; contador < meses.length; contador++){
    
//     console.log(meses[contador]);
// }

// let funcionarios = [
//     {id: 1, nome: "César", habilitado: false},
//     {id: 2, nome: "Jéssica", habilitado: false},
//     {id: 3, nome: "Renan", habilitado: true},
//     {id: 4, nome: "Marlon", habilitado: false},
//     {id: 5, nome: "Ana", habilitado: false},
// ];

// let encontrouHabilitado = false;

// for(let contador = 0; contador < funcionarios.length; contador++){

//     let funcionario = funcionarios[contador];

//     if(funcionario.habilitado === true){
//         console.log("Funcionario habilitado encontrado "+funcionario.nome);
//         encontrouHabilitado = true;
//         break;
//     }

// }


// if(!encontrouHabilitado){
//     console.log("nenhum funcionario encontrado");
// }

// let funcionarios = [
//      {id: 1, nome: "César", habilitado: true},
//      {id: 2, nome: "Jéssica", habilitado: false},
//      {id: 3, nome: "Renan", habilitado: true},
//      {id: 4, nome: "Marlon", habilitado: false},
//      {id: 5, nome: "Ana", habilitado: false},
// ];

// let encontrouHabilitado = false;

// for(let contador = 0; contador < funcionarios.length; contador++){

//     let funcionario = funcionarios[contador];

//     if(funcionario.habilitado === true){
//         console.log("Funcionario habilitado "+funcionario.nome);
//         encontrouHabilitado = true;
//         continue
//     }

// }

// if(!encontrouHabilitado){
//     console.log("Nenhum funcionario encontrado")
// }

let notas = [7,8,9,6];

let soma = 0;

let quantidade_notas = 4;

for(let contador = 0; contador < quantidade_notas; contador++){

    soma = soma + notas[contador];
}

let media = soma / quantidade_notas;

if(media > 6){
    console.log("Parabens voce foi aprovado");
}else{
    console.log("Que pena voce foi reprovado");
}