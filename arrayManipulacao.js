const diaSemana = [
    "domingo",
    "segunda",
    "terca",
    "quarta",
    "quinta",
    "sexta"
];
//utilizando as funcoes nativas reduzimos a nossa quantidade de codigo e fazendo isso conseguimos alem de um codigo mais limpo
//um codigo com menas chances de erro
//com o .push poemos inserir valores em um array como fazemos com o dia sabado
/* diaSemana.push("sabado");
console.log(diaSemana) */

//com o .map percorremos os valores de um array
//com o .map temoa basicamente o mesmo retorno de um for of
/* for(let dias of diaSemana){
    console.log(dias)
} */
diaSemana.map( (dia)=> console.log(dia));