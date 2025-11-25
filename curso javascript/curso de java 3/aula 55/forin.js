// "FOR IN - ESTRUTURA DE REPETIÇÃO"


// for in = lê os índices ou chaves do objeto


/*const frutas = ['Perâ', 'Maça', 'Uva'];

for (let i in frutas) { 
    console.log (i);
}

for (let indice in frutas) { 
    console.log (frutas[indice]);
}*/

const pessoa = {
    nome: 'Tatá',
    sobrenome: 'Eva',
    idade: 28
}
for (let i in pessoa) {
console.log(i);
 }

console.log (pessoa.nome);
console.log (pessoa['nome']); //array

const chave = 'nome';
console.log (pessoa[chave])

for (let chave1 in pessoa) {
    console.log (chave1, pessoa [chave1]);
}
