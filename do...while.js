//let contador = 0;
//do{

    //console.log(contador);
    //contador++

//}while(contador < 10);

//let contador = 0;

// let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

// do {
//     console.log(meses[contador]);
//     contador++
// }while(contador < meses.length);

// let funcionarios = [
//     {id: 1, nome: "César", habilitado: false},
//     {id: 2, nome: "Jéssica", habilitado: false},
//     {id: 3, nome: "Renan", habilitado: true},
//     {id: 4, nome: "Marlon", habilitado: false},
//     {id: 5, nome: "Ana", habilitado: false},
// ];

// let contador = 0;
// let encontrouHabilitado = true;

// do{
//     let funcionario = funcionarios[contador];
//     if(funcionario.habilitado === true){
//         console.log("Funcionario habilitado "+funcionario.nome+" encontrado");
//         encontrouHabilitado = true;
//         break //usando o break o codigo para qunado achar o primeiro habilitado no array
//     }
//     contador++
// }while(contador < funcionarios.length);

// if(!encontrouHabilitado){
//     console.log("Nenhum funcionario habilitado");
// }

// let funcionarios = [
//        {id: 1, nome: "César", habilitado: false},
//        {id: 2, nome: "Jéssica", habilitado: false},
//        {id: 3, nome: "Renan", habilitado: true},
//        {id: 4, nome: "Marlon", habilitado: false},
//        {id: 5, nome: "Ana", habilitado: false},
// ];

// let contador = 0;
// let encontrouHabilitado = false;

// do{
//     let funcionario = funcionarios[contador];

//     contador++
//     if(funcionario.habilitado === true){
//         console.log("funcionario "+funcionario.nome+" habilitado");
//         encontrouHabilitado = true;
//         continue //usando o continue o codigo continua executando interrompendo o loop passando para a proxima selecao
//     }
// }while(contador < funcionarios.length);

// if(!encontrouHabilitado){
//     console.log("Nenhum funcionario habilitado");
// }

let valor_mensalidade = 100;
let taxa_multa = 0.02;
let total_dias = 10;
let contador = 1;

do{

    let dias_atraso = contador;

    let valor_multa = valor_mensalidade * taxa_multa * dias_atraso;

    let nova_mensalidade = valor_mensalidade + valor_multa;

    console.log("Dias de atraso: "+ dias_atraso +" - mensalidade atrasada: R$" + nova_mensalidade +",00");

    contador++

}while(contador < total_dias);

