// array é uma lista de coisas
// consigo colocar varios objetos dentro de um array, porém não é uma boa pratica colocar varios tipos de objetos dentro de uma arry sem ser do mesmo tipo
// os arrays tem um indice diferente de string, não se conta por letra e sim por item, começando pelo 0



const alunos = ['João', 'Maria', 'Josefina'];
console.log (alunos);
console.log (alunos [0]); // funçao que retorna o indice da array
alunos [0] = 'Eduardo'; // editar o indice da array
console.log (alunos);
alunos [3] = 'Luiza'; // adicionar um item a array
console.log (alunos);
console.log (alunos.length); // para saber o tamanho da array
alunos.push ('Creitinho'); // adciona um item ao final da nossa array
console.log (alunos);
alunos.unshift ('Esmeralda'); // adiciona um item no começao da array
console.log (alunos);
alunos.pop(); // remove o ultimo item da array
console.log (alunos); 
const removido = alunos.pop(); // ver qual item foi removido
console.log (removido);
const removidos = alunos.shift(); // remove o item do começo
console.log (removidos);
delete alunos [1]; // apagar um item da array
console.log (alunos);
console.log (alunos.slice(0,2)); //reproduz somente os items desejados da array
console.log (alunos.slice(0,-1)); // ele negativo funciona de traz para frente
console.log (typeof alunos); // tipo de dado que estamos trabalhando
console.log (alunos instanceof Array); // mostra se é uma array ou não
