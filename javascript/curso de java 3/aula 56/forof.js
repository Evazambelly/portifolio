// "FOR OF - ESTRUTURA DE REPETIÇÃO"

// for classico -geralmente com interaveis (array ou strings)
// for in - retorna o indice ou chave (string, array ou objetos)
// for of - retorna o valort em si (interáveis, arrays ou strings)

const nome = 'Tata Eva'; // " ['tata', 'eva'] assim aparerce a string inteira"

/*for (let i = 0; i < nome.length; i++) {
    console.log (nome[i]);
} // mostra todas as letras da minha string

for (let i in nome) {
    console.log (nome[i]); // o mesmo que acima
}*/

for (let valor of nome) { // ao inves de pegar o indicer ele pega o valor
    console.log (valor);
}


