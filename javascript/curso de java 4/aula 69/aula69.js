/* Parametros da função */ 

/*function funcao() {
console.log(arguments[5]);
};
funcao ( 0, 1, 2, 3, 4, 5);



function funcao1 () {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total)
};

funcao1 ( 1, 2, 3, 4, 5, 6, 7);*/


/* funcao2 (a , b= 2, c = 2) {
console.log (a + b + c);
};

funcao2 (2, 10, 10);*/


/*function funcao ({nome, sobrenome, idade }) {
    console.log (nome, sobrenome, idade);
};
funcao ({nome:'Talita', sobrenome:'Bonafé', idade: '28'});*/

/*
function f1 ([valor1, valor2, valor3]) {
console.log(valor1, valor2, valor3);
};

f1 (['Rodriguito', 'do gueto', 30]);*/


function conta (operador, acumulador, ...numeros) {
for (let numero of numeros) {
  if (operador === '+')acumulador += numero;
  if (operador === '-')acumulador -= numero;
  if (operador === '*')acumulador *= numero;
  if (operador === '/')acumulador /= numero;
}
console.log (acumulador);
}
conta( '*', 1, 20, 30, 40);




