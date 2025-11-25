// " fILTRANDO O ARRAY"


/*const numeros = [5, 3, 7, 11, 20, 50,35];
const callback = numeros.filter(function(valor){
  return  valor >=10
});


console.log(callback);*/


const pessoas = [
{nome: 'Talita', idade : 28},
{nome: 'Evelyn', idade:23},
{nome: 'Ana', idade: 50}
];
const pessoas1= pessoas.filter(obj => obj.nome.length >= 5);
console.log (pessoas1)

