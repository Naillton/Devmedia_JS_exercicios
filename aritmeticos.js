var quantidadeVagas = 2 + 5;
console.log(quantidadeVagas);

var contratados = 7 - 2;
console.log(contratados)

var valorContribuicao = 2500 * 0.10;
console.log(valorContribuicao);

var primeiraParcela = 2500 / 2;
console.log(primeiraParcela);

var operacaoModulo = 15 % 4;
console.log(operacaoModulo);

var opModulo = 3 % 1.2;
console.log(opModulo);

//usando o == 0 eu recebo um valor true se o resto da divisao for 0 e false se nao for
var ePar = 20 % 2 == 0;
console.log(ePar);

//juntando strings
console.log("Texto" + " e Complemento");
console.log("5" + "6")

//convertendo tipos diferentes em string com o +
console.log("texto" + 20);
console.log("texto" + true);
console.log([1,2,3,4] + 5);
console.log({nome:'Jose'} + 1);
console.log("texto" + null);
console.log("texto" + undefined);

//convertendo tipos diferentes em numeros com o +
//sempre lembrar que o null e tratado como 0 pelo javascript
console.log(55 + 5);
console.log(5 + true);
console.log(5 + null);
console.log(true + true);
console.log(true + null);
console.log(null + null);
console.log(null + false);
console.log(5 + undefined);
console.log(null + undefined);

//atribuicao
var preco = 10;
preco = preco + 20;
console.log(preco);

var preco1 = 20;
preco1 += 1;
console.log(preco1);

//incremento e decremento

var contador = 5;
contador++;

var cont = 10;
cont--;

console.log(contador);
console.log(cont);

//operador relacional ou comparativos

console.log(21 == 21);

console.log(120 == 100);

console.log(1 != 2);

console.log(true == 1);

console.log(3 < 100);

console.log(5 > 4);

console.log(34 < 4);

console.log(20 > 50);

console.log(100 <= 100);

console.log(100 <= 101);

console.log(50 >= 50);

console.log(50 >= 49);

//desigualdde e igualdade estritas
var result = 21 === "21";
var logico = 1 === true;
console.log(logico);
console.log(result);


//operadores logicos
true && false;
false && false;
true || false;
false || false;
!true


console.log( false || true && false );
console.log( false && true && !false );
console.log( 20 === "20" && !false );
console.log( 20 > 10 && 1 == '1' );