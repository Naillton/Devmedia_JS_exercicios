//Usamos o for in para percorrer um objeto

// let aluno = {nome: "Marcos", email: "marcos@gmail.com", idade: 24}

// for(let dados in aluno){
//     console.log(aluno[dados]);
// }

// let carro = { nome: "Argo", marca: "Fiat", preco: 50000, ano: 2021}

// let percentual_desconto = 5;

// for(let propriedade in carro){

//     if(propriedade == "preco"){

//         let desconto = (carro.preco * percentual_desconto) / 100;

//         let novo_preco = carro.preco - desconto;

//         console.log("novo preco: R$"+novo_preco+",00");
//     }else{
//         console.log(propriedade +": "+carro[propriedade]);
//     }
// }


let produtos = [
    { id: 1, nome: "pizza", preco: 50 },
    { id: 2, nome: "macarronada", preco: 25 },
    { id: 3, nome: "lasanha", preco: 45 },
    { id: 4, nome: "nhoque", preco: 30 }
];

let desconto = 5;

for(let contador = 0; contador < produtos.length; contador++){
    
    let produto = produtos[contador];

    for(let propriedade in produto){

        if(propriedade == "preco"){

            let novo_preco = produto.preco - desconto;

            console.log("preco atualizado: R$"+novo_preco+",00");
        }else{

            console.log(propriedade+": "+produto.preco);
        }
    }

    console.log("\n");

}