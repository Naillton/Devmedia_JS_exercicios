export const inverteMesDia = (mesDia) => {
    const dataInvertida = mesDia.split('/');

    return dataInvertida[1] + '/' + dataInvertida[0];
}

export const retornaIntensidade = (intensidade) => {
    let novaIntensidade = '1 (Fraca)';

    if ( intensidade.indexOf('Forte') >= 0 ) {
        novaIntensidade = '3 (Forte)';
    } else if ( intensidade.indexOf('Média') >= 0 ) {
        novaIntensidade = '2 (Média)';
    } else if (  intensidade.indexOf('Irregular') >= 0 ) {
        novaIntensidade = '(Irregular)';
    }
  
    return novaIntensidade;
}

export const retornaHemisferio = (declinacao) => declinacao >= 0 ? 'Norte' : 'Sul';