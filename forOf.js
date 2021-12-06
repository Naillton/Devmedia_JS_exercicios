let clientes = [
    {Nome: "Marcos", Telefone: "99999-0099"},
    {Nome: "Sergio", Telefone: "98989-1099"},
    {Nome: "Carlos", Telefone: "90969-2299"}
]

for(let client of clientes){
    let nome = client.Nome;
    let numero = client.Telefone;

    console.log("Nome: "+ nome +" Telefone: "+ numero);
}