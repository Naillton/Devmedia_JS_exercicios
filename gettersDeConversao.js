//com o toDateString() e o toTimeString(), conseguimos pegar a data e a hora formatadas tendo uma saida limpa e mais elaborada
//lembrando sempre que a data fica em ingles e a hora esta no formato do sistema
const data = new Date()
const diaString = data.toDateString()
const time = data.toTimeString()
console.log(diaString)
console.log(time)
//retornando uma string com um formato universal
console.log(data.toISOString())
//retornando uma string data local
console.log(data.toLocaleDateString())
//retornando uma strinf hora local
console.log(data.toLocaleTimeString())
//personalizando datas
const options = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    weekday: 'long',
    month: "numeric",
    year: 'numeric',
    day: 'numeric'
}
console.log(data.toLocaleString('pt-BR', options))
