/* 
//Com o substring conseguimos pegar a palavra aprendendo na nossa variavel frase, passando a posicao da primeira letra ate a ultima
let frase = "Estou aprendendo a programar em JavaScript"
let result = frase.substring(6,16)
console.log(result)
 */

/* 
//Com o metodo substr temos um resultado similar ao substring onde conseguimos retornar a string javascript na variavel frase
let frase = "Estou aprendendo a programar em JavaScript"
let resultado =  frase.substr(32)
console.log(resultado)
 */

/* A diferenca do substr e da substrig e que o substr pega o valor inicial da string ate o final da mesma 
e o substring pega o inicio de um indice e espera que informamos o final */

let conteudo = "Neste artigo de JavaScript veremos como utilizar o método substring() para extrair uma sequência de caracteres de uma string.";

let tamanho = conteudo.length
let frase = ""

if(tamanho > 100){
    frase = conteudo.substr(0, 97)
    frase += "..."
}else{
    frase = conteudo
}

console.log(frase);