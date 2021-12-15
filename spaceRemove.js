//com o metodo nativo trim eu consigo remover os espacos do inicio e do fim da variavel nome
/* let nome = "    Marilia    "
console.log(nome.trim())
 */
let cep_acesso = "233440-009"
let cep_space = "    233440-009    "

if(cep_acesso.trim() == cep_space.trim()){
    console.log("cep iguais")
}else{
    console.log("cep diferente!!")
}