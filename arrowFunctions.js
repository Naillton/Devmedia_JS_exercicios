//as arrow functions sao escritas de formas diferentes as funcoes tradicionais
//elas tambem podem ou nao receber parametros
/* const media = (number1, number2)=>{

    let mediaFinal = (number1 + number2) / 2;

    return mediaFinal
}

const mediaFinal = media(10, 2)
console.log("A media do aluno e "+mediaFinal) */

//podemos ainda diminuir o tamanho da funcao
const media = (number1, number2) => (number1 + number2) / 2
let mediaFinal = media(10, 10)
console.log("A media final e "+ mediaFinal)