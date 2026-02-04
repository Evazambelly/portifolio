// {} se usa com objeto
// [] se usa com array

const pessoa1 = {
    nome: 'Ritinha',
    sobrenome: 'Olivares',
    idade: 30
};
console.log (pessoa1.nome);
console.log (pessoa1.sobrenome);
console.log (pessoa1.idade);


const pessoa2 = {
    nome: 'Maria',
    sobrenome: 'Betania',
    idade: 57
};
console.log (pessoa2.nome);
console.log (pessoa2.sobrenome);
console.log (pessoa2.idade);


function criaPessoa (nome, sobrenome, idade) {
    return {
        nome, sobrenome, idade
    };
};
const pessoa3 = criaPessoa ('Mari', 'Cruz', '23');
const pessoa4 = criaPessoa ('Dulce', 'fonseca', '28');
const pessoa5 = criaPessoa ('Gustavo', 'Montanhes', '29');
console.log (pessoa3.nome, pessoa4.nome, pessoa5.nome); // dessa forma mais raoida de criar uma lista com varios detalhes dentro de um objeto

const pessoa6 = {
    nome: 'Ravena',
    sobrenome: 'Miranda',
    idade: 25,

    fala () {
        console.log(`A minha idae atual é ${this.idade}.`);
    },

    incrementaIdade(){
        this.idade++;
    }
};

pessoa6.fala();
pessoa6.incrementaIdade();
pessoa6.fala();
pessoa6.incrementaIdade();





