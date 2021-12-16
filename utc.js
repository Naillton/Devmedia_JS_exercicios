//usando o toString e transformando nossa data em string conseguimos ter uma saida mais limpa como vemos abaixo
//usando o UTCString() temos uma saida em string mas com o Tempo Médio de Greenwich diferente do sitema
//e importante lembrar que o utc e a basa para se calcular um determinado fuso horario
const data = new Date();
console.log(data)
console.log("data formatada "+data.toString())
console.log(data.toUTCString())