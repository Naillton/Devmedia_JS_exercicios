const somaNumeros = (num1, num2) =>{
    return num1 + num2;
}


const subtracaoNumeros = (num1, num2) => {
    return num1 - num2;
}

//para exportar mais e uma funcao ao mesmo tempo usamos o export entre chaves {somaNumeros, subtracaoNumeros}
//assim teremos as duas funcoes fazendo duas operacoes
export {somaNumeros, subtracaoNumeros}