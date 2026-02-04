/* Escreva uma função que recebe um numero e retorne o seguinte:
Número é divisível por 3= fizz
Número é divisível por 5 = buzz
Número divisível por 3 e 5 = fizzbuzz
Número Não é divisível por 3 e 5 = retorna o proprio número
Se o número é realmente um número = retorna o proprio número
Use a função com números de 0 a 100
*/

function fizzBuzz (n) {
    if (typeof n !== 'number') return n;
    if (n % 3 === 0 && n % 5 === 0) return 'fizzBuzz';
    if (n % 3 === 0) return 'fizz';
    if (n % 5 === 0) return 'Buzz';
    return n;
}

for (let  i = 0; i <= 100; i++) {
    console.log (i, fizzBuzz(i))
}





