//em uma funçao vc manda um valor pra ela e ela te retorna um valor, mas tem funçao que não retorna valor

function saudação (nome) {
console.log (`Bom dia ${nome}!`);
}; 
saudação('Luiz');

function saudacao (nome) {
return `Bom dia ${nome}!`;
};
const variavel = saudacao('Roberto');
console.log (variavel);
    
function soma (x,y) {
    const  resultado = x + y;
    return resultado;
};
console.log (soma(2 ,2));
 // eu não consigo executar nada após o return
 // não se consegue modificar nada de uma funçao fora dela


 function soma (x,y) {
    const  resultado = x + y;
    return resultado;
};
console.log (soma('Tata', ' Eva'));


function soma (x = 1,y = 1) {
    const  resultado = x + y;
    return resultado;
};
console.log (soma());


function soma (x = 1,y = 1) {
    const  resultado = x + y;
    return resultado;
};
console.log (soma(9)); // 4 assume o valor de x


const raiz = function (n) {
return n ** 0.5;
};
console.log (raiz(9));
console.log (raiz(16));
console.log (raiz(25));


const raiz1 =  n =>  n ** 0.5; // simplificaçao da funçao acima
console.log (raiz(9));
console.log (raiz(16));
console.log (raiz(25));



