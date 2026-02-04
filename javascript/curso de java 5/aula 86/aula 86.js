// " REDUCE "


const numeros = [5, 6 ,9, 10, 33, 55, 35, 89];
const total = numeros.reduce(function(acumulador, valor, indice, array){
acumulador.push(valor * 2);
    return acumulador;
},[]); 
;


const pessoas = [
    {nome: 'ju', idade: 35},
    {nome: ' Ro', idade: 45}
];

const maiorIdade = pessoas.reduce(function(acumulador, valor){
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
})
console.log(maiorIdade);


