// "ATRIBUIÇÃO VIA DESESTRUTURAÇÃO (OBJETOS)"

const pessoa = {
    nome: 'Tata',
    sobrenome: 'Eva',
    idade: 28,
    endereco: {
    rua: 'Av Brasil',
    numero: 320
}
};

// atribuição via desestruturação
// (nome: teste) // especificando chave e mudando ela

//const { nome: teste , sobrenome } = pessoa;
//console.log(teste, sobrenome);

const {endereco: {rua, numero}} = pessoa;
console.log (rua, numero);









