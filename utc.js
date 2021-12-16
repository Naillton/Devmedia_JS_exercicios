/* //usando o toString e transformando nossa data em string conseguimos ter uma saida mais limpa como vemos abaixo
//usando o UTCString() temos uma saida em string mas com o Tempo Médio de Greenwich diferente do sitema
//e importante lembrar que o utc e a basa para se calcular um determinado fuso horario
const data = new Date();
console.log(data)
console.log("data formatada "+data.toString())
console.log(data.toUTCString())
//com o valueOf conseguimos ter a quantidade de milesegundos que tivemos desde 1970 ano de inicio do unix expoch ate a data atual
console.log(data.valueOf()) */

//acessando hora e calculando quantos minutos fazem da ultima postagem
const dataAtual = new Date();
const dataPostagem = new Date( "2021-11-16T11:35")

const time = dataAtual.getTime();
const timePost = dataPostagem.getTime();

const diferenca = time - timePost;
const segundos = diferenca / 1000;
const minutos = segundos / 60;
const horas = minutos / 60;

console.log(horas)