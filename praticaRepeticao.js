let cursos_idiomas = [
    { nome: "Inglês", preco: 2500, carga_horaria: 160 },
    { nome: "Espanhol", preco: 1500, carga_horaria: 110 },
    { nome: "Francês", preco: 3600, carga_horaria: 200 },
    { nome: "Chinês", preco: 5500, carga_horaria: 400 },
    { nome: "Alemão", preco: 3800, carga_horaria: 230 }
];

for(let course of cursos_idiomas){
    let name = course.nome
    let price = course.preco
    let horario = course.carga_horaria

    let course_por_hora = price / horario

    console.log("Curso: "+name);
    console.log("Preco: "+price)
    console.log("Carga horaria: "+horario)
    console.log("O curso de "+name+" tem como valor gasto por hora "+course_por_hora.toFixed(2));

    if(course_por_hora >= 15){
        console.log("Hora/Aula superior a R$15\n");
    }else{
        console.log("Hora/Aula inferior a R$15\n");
    }
}