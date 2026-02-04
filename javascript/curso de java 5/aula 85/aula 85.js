// " MAPEANDO UM ARRAY "

/*const numeros = [3, 66, 44, 56, 99, 2, 7, 19];
const numerosEmDobro = numeros.map(obj => obj *2);
console.log(numerosEmDobro);*/



const pessoas = [
    {nome:'Roberta' , idade:30},
    {nome:'Ana', idade:40},
    {nome:'Josefina' , idade:50}
];
const pessoas1 = pessoas.map(valor => valor.idade);

const pessoas2 = pessoas.map (function(obj, indice) {
const indice1 = {...obj};
indice1 = indice;
return indice1});

console.log (pessoas1);
console.log (indice1);


