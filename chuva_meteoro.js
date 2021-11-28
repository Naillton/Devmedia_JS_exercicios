let meteoros_trimestre_um = "Alfa centaurideos comeca em 03/01 e termina em 05/01\nGama Normideos comeca em 17/02 e termina em 20/02\nPupideos comeca em 25/03 e termina em 29/03";

let meteoros_trimestre_dois = "Liridas comeca em 23/05 e termina em 26/05\nEta Aquaridas comeca em 31/05 e termina em 02/06\nBootideos de Junho comeca em 16/06 e termina em 20/06";

let meteoros_trimestre_tres = "Eta Liridas comeca em 19/08 e termina em 22/08\nAlfa Capricornideos comeca em 13/09 e termina em 17/09";

let meteoros_trimestre_quatro = "Delta aquaridas do Sul comeca em 11/10 e termina em 15/10\nPiscis Austrinideos comeca em 04/12 e termina em 08/12\n Perseidas comeca em 27/12 e termina em 31/12";

let date = new Date();
let mes = date.getMonth();

switch(mes){
    case 1:
    case 2:
    case 3:
        console.log("Chuvas de meteoro no primeiro trimestre:\n\n"+meteoros_trimestre_um);
        break;
    case 4:
    case 5:
    case 6:
        console.log("Chuvas de meteoro no segundo trimestre:\n\n"+meteoros_trimestre_dois);
        break;
    case 7:
    case 8:
    case 9:
        console.log("Chuvas de meteoro no terceiro trimestre:\n\n"+meteoros_trimestre_tres);
        break;
    case 10:
    case 11:
    case 12:
        console.log("Chuvas de meteoro no quarto trimestre:\n\n"+meteoros_trimestre_quatro);
        break;
    
}
