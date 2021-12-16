//com o get na nossa constante data podemos acessar muitos valores entre eles temos os valores .getMonth que retorna o mes em number
//.getFullYear() que nos retorna o ano completo e o .getHours que nos retorna as horas do sistema
const data = new Date()
//por padrao a contagem comeca em 0 entao janeiro seria 0, se somarmos + 1 ao getMonth teremos o mes de janeiro valendo 1
const mes = data.getMonth() + 1

const dias = data.getDay()

switch(dias){
    case 1:
        console.log("segunda")
    break;
    case 2:
        console.log("terca")
    break;
    case 3:
        console.log("quarta")
    break;
    case 4:
        console.log("quinta")
    break;
    case 5:
        console.log("sexta")
    break;
    case 6:
        console.log("sabado")
    break;
    case 0:
        console.log("domingo")
    break;
}

switch(mes){
    case 1:
        console.log("janeiro")
    break;
    case 2:
        console.log("fevereiro")
    break;
    case 3:
        console.log("marco")
    break;
    case 4:
        console.log("abril")
    break;
    case 5:
        console.log("maio")
    break;
    case 6:
        console.log("junho")
    break;
    case 7:
        console.log("julho")
    break;
    case 8:
        console.log("Agosto")
    break;
    case 9:
        console.log("setembro")
    break;
    case 10:
        console.log("outubro")
    break;
    case 11:
        console.log("novembro")
    break;
    case 12:
        console.log("Dezembro")
    break;
}