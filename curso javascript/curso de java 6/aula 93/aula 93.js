// " PROPERTYS "

function Pessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => this.nome + ' ' + this.sobrenome
}

const pessoa1 = new Pessoa('Tata', 'Eva');
const pessoa2 = new Pessoa('Talita', 'Eva');

console.dir(pessoa1);
console.dir(pessoa2);




