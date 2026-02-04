/* "FUNÇOES FABRICAS" */

function criaPessoa (nome, sobrenome, a, p) {
return {
    nome,
    sobrenome,
    fala (assunto) {
return `${this.nome} está ${assunto}`;
    },
    altura: a,
    peso: p,
    imc() {
        const indice = this.peso / (this.altura ** 2);
        return indice.toFixed(2);
    }
};
}

const p1 = criaPessoa('Jonatam', 'Julio', 1.85, 105);
console.log (p1.imc());
const p2 = criaPessoa('Joaquina', 'Maria', 1.6, 84);
console.log (p2.imc());










