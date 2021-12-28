function converteParaDolar(real){

    let taxa_conversao = 5.64
    let dolar = real * taxa_conversao
    return dolar
}

function converteParaEuro(real){

    let taxa_conversao = 6.37
    let euro = real * taxa_conversao;
    return euro
}

export {converteParaDolar, converteParaEuro};