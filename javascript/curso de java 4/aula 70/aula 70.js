/* "RETORNO DAS FUNÇOES" */

/*function criaPessoa (nome, idade) {
    return {nome, idade}
};

const p1 =  criaPessoa ('Luiz', 30);
const p2 = {
    nome: 'João',
    idade: 32
};

console.log (p1, p2);*/



function criaMultiplicador (multiplicador) {
    return function(n) {
        return n * multiplicador;
    }
};

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);


console.log (duplica (2));
console.log (triplica (2));
console.log (quadriplica (2));






