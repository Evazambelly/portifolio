// Atribuiçao via desestruturação (array)
// ...rest (usamos para pegar o restante da funçao, ...spread (usamos para distribuir algo), mas ambas são as mesmas funçao



/*const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
//const  [primeiroNumero, segundoNumero, ...resto] = numeros;
const  [um, dois, ...resto] = numeros;
console.log (um, dois);
console.log (resto); // pega os restos dos numeros que não ultilizei*/



/*const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const  [um, , tres, , cinco, , sete] = numeros;// pular numeros ultilizando espaços vazios
console.log (um, tres, cinco, sete);*/
 

//                  0       1         2
//                0  1  2    0  1  2    0  1  2
const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
//console.log (numeros[1][2]);
const [lista1, lista2, lista3] = numeros;
console.log(lista2[2]);





