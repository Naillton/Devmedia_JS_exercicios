//import usado para importar o modulo ./colecao.js e return.js assim usando o codigo de ambos
//o codigo com modulo alem de mais limpo e menor fica bem mais facil a sua manutencao
//usar modulos nos ajudam muito a encontrar e resolver problemas em codigos
import colecao_signos from "./colecao.js";
import retorna_signo from "./return.js";

let data_app = new Date();

const nome_signo = retorna_signo(colecao_signos, data_app);

console.log("O signo de hoje é: " + nome_signo);