const hours = new Date()
const horas = hours.getHours() + 3
const ultimoAcesso = new Date("2021-11-16 17:00:00")
const time = hours.getTime();
const resultado = ultimoAcesso - time;
const miliSeconds = 1000 * 60 * 60;
const miliSecondsDay = miliSeconds * 24;
let mensage = ""

if(horas >= 6 && horas <= 12){
    mensage = "Bom diaaaaa programador";
}else if(horas >= 13 && horas <= 17){
    mensage = "Boa tardeeee programador\n";
}else if(horas >= 18 && horas <= 23){
    mensage = "Vamos dormir programador larga o pc\n";
}else if(horas === 0 && horas >= 1 && horas <= 5){
    mensage = "Comecou a madrugada xiiiiiiiii\n";
}

if(resultado > miliSecondsDay){
    mensage += "Voce esta ausente a dias";
}else if(resultado > miliSeconds){
    mensage += "voce esta ausente a horas"
}else{
    mensage += "Voce nao fica muito ausente"
}

console.log(mensage)