//funcao com parametro
function soma (num1, num2){
    return num1 + num2
}

console.log(soma(5, 5))

function multi(number, number1){
    let media = (number + number1) / 2;
    let status = "";
    if(media >= 6){
        status = "Aprovado"
    }else if(media < 6){
        status = "Reprovado"
    }

    return status
}
let resultado = multi(10, 1)
console.log("O aluno esta "+resultado)