let nome = "Estou aprendendo javascript na Devmedia"
let beginPosition = 16
let finalPosition = 27
let frase = nome.substring(beginPosition, finalPosition)
console.log(frase)
//lembrar sempre que strings sao cadeias de caracteres e podemos acessar cada posicao como se fosse um array
//o metodo que pulavamos uma linha com o \n agora pode ser usado com crases onde nao precisariamos deixar o texto junto e ilegivel
//let frase = "Ola usamos o \n para pular uma linha, mas fica muito ilegivel pois usando o \n desse jeito seria ruim"
//usando a crase
let crase = `Esse e um texto sem o barra n
Podemos pular uma linha dessa forma
Tornando o texto mais legivel.`
console.log(crase)