let num1 = 1500;
let num2 = 2.5;
let num3 = 3
let num4 = 10.834384289
console.log(num1 + num2)
console.log(num1.toString() + num2); // converte o numero para uma string apenas nessa linha
console.log(typeof num1); // mostra se é string ou variável 
num3 = num3.toString(); // modificar permanentemente de number para string
console.log( typeof num3);
console.log(num1.toString(2)); // transforma em numero binario
console.log(num4.toFixed(2));  // serve para controlar quantas casas decimais vai aparecer  
console.log(Number.isInteger(num1));  // para saber se o numero é inteiro ou não


let num5 = 0.7;
let num6 = 0.1;
num5 += num6; // num5 = num5 + num6
num5 += num6; //
num5 += num6; // resultado 0.9999999999 para reasolver o problema da conta, e se tornar um numero inteiro use
num5 = parseFloat  (num5.toFixed(2)) // resolve a conta
// ou number no lugar de parseFloat
console.log(num5)
console.log (Number.isInteger(num5));


// outra forma de resover essa questão tbm seria, segue abaixo
let num7 = 0.7
let num8 = 0.1
num7 = ((num7* 100) + (num8 * 100)) / 100; // resul 0.8
num7 = ((num7* 100) + (num8 * 100)) / 100; // 0.9
num7 = ((num7* 100) + (num8 * 100)) / 100; // 1

console.log (num7)

