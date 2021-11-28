var produto = "Smartphone";

switch(produto){

    case "Smartphone":
        console.log("Produto: Smartphone");
        break;

    case "Winphone":
        console.log("Produto: Windowsphone");
        break;

    case "Iphone":
        console.log("Produto: Iphone");
        break;
    default:
        console.log("Produto: Made in China");
        break;
}     


let estacao_mes = "Junho";

switch(estacao_mes){
    case "Janeiro":
    case "Fevereiro":
    case "Marco":
        console.log("Verao");
        break;
    case "Abril":
    case "Maio":
    case "Junho":
        console.log("Outono");
        break;
    case "Julho":
    case "Agosto":
    case "Setembro":
        console.log("Inverno");
        break;
    case "Outubro":
    case "Novembro":
    case "Dezembro":
        console.log("Primavera");
        break;
    default:
        console.log("Mes invalido");
        break;
}