import { inverteMesDia, retornaHemisferio, retornaIntensidade } from "./funcoesLogicas.js";

const imprimeChuva = (chuva) => {
    //com o padEnd preenchemos uma string com um determinado caractere nesse caso sera um ' '
    const nome = chuva.nome.padEnd(27, ' ');
    //retornando os valores das funcoes logicas e guardando as em variaveis
    let intensidade = retornaIntensidade(chuva.intensidade);
    let hemisferio = retornaHemisferio(chuva.declinacao);
    //utilizando variaveis para adcionar espacos em branco no final delas
    intensidade = intensidade.padEnd(11);
    hemisferio = hemisferio.padEnd(10, ' ');

    const dataInicio = inverteMesDia(chuva.inicio)
    const dataFim = inverteMesDia(chuva.fim);

    console.log(`${ nome } - ${ intensidade } - ${ hemisferio } - ${ dataInicio } à ${ dataFim } `);

}

const imprimeListaChuva = (listaChuva) => {
    console.log("\nNOME DO METEORO       -     INTENSIDADE -  HEMISFERIO -    PERIODO");

    listaChuva.forEach( imprimeChuva )
}


export default imprimeListaChuva