function tabuada(numero){
    console.log("A tabuada de multiplicacao do "+numero+"\n");
    for(let number = 0; number <= 10; number++){
        let resultado = numero * number
        console.log( numero + " * "+ number + " = " + resultado +"\n");
    }
}

export default tabuada;