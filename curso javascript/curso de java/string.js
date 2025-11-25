
let umastring = 'Um texto';
let umastring1 = "Um \"texto\"";
console.log(umastring); // reproduzir uma string
console.log(umastring1);
console.log(umastring[4]); // mostrar a letra do  indice na string
console.log(umastring[-1]); // undefined, por que esta procurando um valor fora da string
console.log(umastring.charAt(6)); // mostrar a palavra que esta naquele nivel
console.log(umastring.concat(' em',' um', ' lindo dia')); // concatenar, ou seja juntar uma string
console.log(umastring.concat(' em um lindo dia')); // formas de concatenar
console.log(umastring + ' em um dia lindo'); // concatenar
console.log(`${umastring} em um dia belo.`); // concatenar de uma forma moderna

console.log(umastring.indexOf('texto'));// em qual indice começa o texto
console.log(umastring.indexOf('o', 3)); // vai procurar a letra 'o' a partir do indice 3
console.log(umastring.lastIndexOf('o')); // vai dar o mesmo resultado, porém ele faz isso de traz para frente 
console.log(umastring.match(/[a-z]/g)); // espressão regular, ele encontra uma array(variável do tipo lista) 
console.log(umastring.match(/[a-z]/)); // referente a expressão regulares 
console.log(umastring.search(/[x]/)); // retorna o indice do que se pede, aceita expressoes regulares
console.log(umastring.replace('Um', 'Outro')); // substituir a palavra de uma string
console.log(umastring.replace(/Um/, 'Outro')); // tbm funciona assim

let umastring3 = 'O rato roeu a roupa do rei de roma.';
console.log(umastring3.replace('r', '#')) // muda a primeira letra 'r' 
console.log(umastring3.replace(/r/g, '#')); // muda todas as letras 'r'
console.log(umastring3.length); // retorna o tamanho da string
console.log(umastring3.slice(2,6)); // assim eu consigo pegar uma palavra especifica de uma string
console.log(umastring3.slice(-5)); // pega o tamanho real de uma string e menos a quantidade que está se pedindo 
console.log(umastring3.slice(-5, -1));
console.log(umastring3.substring(umastring3.length -5, umastring3.length -1)); // executa a mesma funçao

console.log(umastring3.split(' ')); // dividir uma string
console.log(umastring3.split('r')); // vai retirar o 'r'
console.log(umastring3.split(' ', 2)); // me apresenta 2 ou mais palavras de uma string

console.log(umastring3.toUpperCase()); // deixar tudo em maiusculo
console.log(umastring3.toLowerCase()); // tudo em minusculo

