import formata from './formataados.js';

function imc(peso, altura){

    let imc = peso / (altura * 2)
    let imcFormat = formata(imc);
    return imcFormat
}

function state(imc){
    let status = "";
    if(imc <= 18.5){
        status = 'Peso muito baixo'
    }else if(imc > 18.5 && imc <= 24.9){
        status = 'Peso normal'
    }else if(imc > 24.9 && imc <= 30){
        status = 'Peso elevado'
    }else{
        status = 'Obesidade'
    }
    return status
}

export {imc, state};