// " METODOS UTEIS PARA OBJETOS"


const produto = {nome: 'Caneca', preco: 18};
const outraCoisa = {
    ...produto
};

outraCoisa.nome = 'Outro nome';
outraCoisa.preco = 2.5
console.log(produto);
console.log(outraCoisa);







