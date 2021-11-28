var linguagens = ["JavaScript", "C#", "C++", "Java"];
linguagens[2] = "Python";
//console.log(linguagens[2]);

//armazenando dados diferentes no array

var tipos = ["Nailton", 21, "Masculino", 1.80, true]
//console.log(tipos)
//console.log(tipos[1])

var disciplinas = [
    "Portugues",
    "Matematica",
    "Historia",
    "Geografia",
    "Quimica",
    "Fisica",
    "Ingles"
];

//disciplinas[6] = "Frances";
//disciplinas[7] = "Logica";

//console.log(disciplinas);

var funcionarios = [
    "Barbara",
    "Carlos",
    "Helena",
    "Maria",
    "Rogerio"
];

//console.log(funcionarios)

var novos_funcionarios = [
    "Guilherme",
    "Jessica"
];

funcionarios[0] = novos_funcionarios[1];
funcionarios[4] = novos_funcionarios[0];

console.log(funcionarios);