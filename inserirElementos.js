//com o .push conseguimos inserir valores em um array
const nomes = ["Nailton", "Marilia", "Marcelo", "Ragnar"];
nomes.push("bjorn");
nomes[2] = "Cleria";
console.log(nomes);

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numeros.push(10)
console.log(numeros)

//com o .splice vamos remover um elemento de um array pegando a posicao do indice e quantos elementos queremos remover
//sintaxe: .splice(indice, quantidadeElementos)
nomes.splice(3,1);
console.log(nomes);

numeros.splice(9,1);
console.log(numeros);

//com o pop() podemos remover o ultimo elemento de um array e com o shift() removemos o primeiro elemento
//diferente do splice onde podemos pegar a posicao do elemento, com o pop e o shift so pegaremos os valores especificos
nomes.pop();
console.log(nomes);

nomes.shift();
console.log(nomes)