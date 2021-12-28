function formataDiaSemana(dataFeriado){
    let diasDaSemana = ["Domingo", "Segunda-Feira", "Terca-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sabado"];
    return diasDaSemana[dataFeriado.getDay()];
}

function formataDataFeriado(dataFeriado){

    const diaFeriado = dataFeriado.getDate();
    const mesFeriado = dataFeriado.getMonth() + 1;
    const anoFeriado = dataFeriado.getFullYear();

    const dataExibicao = diaFeriado+"/"+mesFeriado+"/"+anoFeriado;

    return dataExibicao;
}

export {formataDiaSemana, formataDataFeriado};