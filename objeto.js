//para criar um produto em js usamos a sintaxe a seguir
var produto = {

    id: 9,
    nome: "Cafeteira Eletrica",
    valor: 99.00

};

var cliente = {

    nome: "Nailton",
    id: 21,
    telefone: "(21) 99999-9999"
};


var aula = {

    id: 10,
    titulo: "Objetos literais",
    tecnologia: "JavaScript"
};

var usuario_logado = true;

//objeto literal e if ternario

var pessoa = {

    id: 2,
    nome: "Zeca Urubu",
    idade: 21
};

if(pessoa.idade >= 18){
    //console.log(pessoa.nome+" Pode dirigir");
}else{
    //console.log(pessoa.nome+" Nao pode dirigir");
}

var aluno = {
    id: 10,
    nome: "Alan",
    altura: 1.90,
    peso: 85
};

var nome = aluno.nome;
var idade = aluno.idade;
var peso = aluno.peso;
var altura = aluno.altura;

var imc = (peso / (altura * altura)).toFixed(2);

console.log("O imc do aluno e: "+ imc)

if(imc < 18.5){
    console.log(nome+" voce esta abaixo do peso");
}else if(imc >= 18.5 && imc <= 24.99){
    console.log(nome+" esta com o peso normal")
}else{
    console.log(nome+" Seu peso esta alto")
}