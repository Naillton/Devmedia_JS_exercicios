//podemos usar o array para guardar os objetos e assim conseguimos acessa-los como vemos abaixo
var disciplinas = [

    {id: 1, nome:"Portugues", carga_horaria: 240},
    {id: 2, nome:"Historia", carga_horaria: 200},
    {id: 3, nome:"Matematica", carga_horaria: 300},
    {id: 4, nome:"Fisica", carga_horaria: 250},
    {id: 5, nome:"Geografia", carga_horaria: 200}

];

//console.log(disciplinas[2].id);
//console.log(disciplinas[2].nome);
//console.log(disciplinas[2].carga_horaria);

var estudos = [
    {nome: "Algoritmo", horario: "9h", descricao: "Algoritmo nos da a logica necessaria para aprender o que quisermos" },
    {nome: "JavaScript", horario: "10h", descricao: "Nos ajuda a desenvolver aplicacoes Web e mobile" },
    {nome: "Git/GitHub", horario: "11h", descricao: "Usamos todos os dias no nosso dia a dia para trbalho e projetos proprios" },
    {nome: "Trybe", horario: "12h", descricao: "Escola de programacao que ensina a programar, aprender e a aprender a aprender" },
    {nome: "Trybe", horario: "13h", descricao: "Escola de programacao que ensina a programar, aprender e a aprender a aprender" },
    {nome: "Trybe", horario: "13h", descricao: "Escola de programacao que ensina a programar, aprender e a aprender a aprender" }
];

var date = new Date();
var dia_semana = date.getDay();

var estudo_do_dia = estudos[dia_semana];

var nome_estudo = estudo_do_dia.nome;
var horario_estudo = estudo_do_dia.horario;
var descricao_estudo = estudo_do_dia.descricao;

console.log("Hoje e dia de " + nome_estudo + " as " + horario_estudo);
console.log("Essa e a descricao do dia, "+ descricao_estudo);

//Exercicio

var chuck_norris = [

    {titulo: "Suicida que nao morre", curiosidade: "Chuck Norris foi home-bomba 34 vezes"},
    {titulo: "Manipulando o tempo", curiosidade: "Chuck Norris nao usa relogio. Ele decide que horas sao"},
    {titulo: "Contando sem parar", curiosidade: "Chuck Norris contou ate o infinito. DUas vezes"}
];

var colecao = chuck_norris.length;

//a funcao Math.floor() arredonda um numero para baixo ou inteiro mais proximo
//a funcao Math.random() gera um numero aleatorio entre 0 inclusivo e 1 exclusivo
// o Math.random() nos da um padrao 0.32343476868162 quandp multiplicamos pelo numero da colecao por exemplo 3 ficaria 3.34434355 e com o math.floor() arredondamos o numero para 3 acessando a posicao do array
var numero_sorteado = Math.floor(Math.random() * colecao);

var curiosidade_escolhida = chuck_norris[numero_sorteado];

var titulo = curiosidade_escolhida.titulo;
var curiosidade = curiosidade_escolhida.curiosidade;

//console.log("CURIOSIDADE SOBRE CHUCK NORRIS");
//console.log("Titulo "+ titulo);
//console.log("Curiosidade "+ curiosidade);

var colecao_livros = [

    { id: 1, nome: "Dom Quixote",           numero_paginas: 863 },
    { id: 2, nome: "O Senhor dos Anéis",    numero_paginas: 1200 },
    { id: 3, nome: "As Crônicas de Nárnia", numero_paginas: 752 },
    { id: 4, nome: "O Caçador de Pipas",    numero_paginas: 371 },
    { id: 5, nome: "A Montanha Mágica",     numero_paginas: 848 }
];

var total_livros = colecao_livros.length ;

primeiro_livro = colecao_livros[0];
ultimo_livro = colecao_livros[4];

console.log( "O total de livros é: " + total_livros );
console.log( "O nome do primeiro livro da coleção é: " + primeiro_livro.nome );
console.log( "O nome do último livro da coleção é: "+ ultimo_livro.nome );