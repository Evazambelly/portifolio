// "REVISANDO OBJETOS"



/*const pessoa = {
nome: 'Elizabethe',
sobrenome: ' Eva'
};
const teste = pessoa.nome


const pessoa2 = new Object ();
pessoa2.nome = 'Luzia';
pessoa2.sobrenome = 'Odete';
pessoa2.falaNome = function () {
    console.log(`${this.nome} está falando oi`)
};

pessoa2.falaNome();*/






/*const pessoa3 = new Object();
pessoa3.nome = 'Tatá';
pessoa3.nome = 'Eva';
pessoa3.idade = 28;
pessoa3.falaNomeAlfa = function () {
   return(`${this.nome} está falando Oie`);
};
pessoa3.getDataNascimento = function () {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade
   };

console.log(pessoa3.getDataNascimento())*/


/*function criaPessoa (nome, sobrenome) {
    return {
        nome,
        sobrenome,
        nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa ('Tatá', 'Eva');
console.log(p1.nomeCompleto());*/



function Pessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p1 = new Pessoa ('Talita', 'Silva');
console.log(p1);





