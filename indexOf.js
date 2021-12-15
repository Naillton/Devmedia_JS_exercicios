//com o indexOf podemos pegar uma determinada string pela sua posicao na frase
//com isso podemos pegar a string JS em uma frase e no console e retornado o indice da posicao
/* let frase = "Programando em JS para web e mobile";

let resultado = frase.indexOf("JS");

console.log(resultado); */

//quando nao temos uma palavra em uma frase o indexOf nos retorna -1 pois a palavra nao existe na frase
let frase = "A palavra nao existe"

let resultado = frase.indexOf("Programar")

if(resultado > -1 ){
    console.log("A palavra existe na frase");
}else{
    console.log("A palavra nao existe na frase")
}