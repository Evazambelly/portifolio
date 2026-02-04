// Aula de Valores primitivos e Valores de referencia
// tipos de dados primitivos (imutáveis) - string, number, boolean, undefined,null (bigint, symbol) = VALORES copiados  quando modificado
// Referencia (mutavel) - array, object, function = passados por referencia
// Referencia por que é criado uma referencia pro mesmo valor na memoria

let a = 'A';
let b = a; // cópia
console.log(a, b);
a = 'Outra coisa'
console.log(a,b) // sempre que vc falar que uma variável é igual a outra estamos fazendo uma copia


let c = [1,2,3];
let d = c;
let e = [...c]; // copio o valor de c
console.log(c,d);
c.push(4); // a funçao push add ao final
console.log(c,d);
d.pop(); // nesse caso d vai voltar a ter 123
console.log(c,d); // a funçao pop remove o ultimo item 

const f = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};
 const h = {...f}  // se euquero copiar o valor de f para h sem que os dois apontem para o mesmo lugar da memoria
f.nome = 'João';
const g = f ;
console.log(g)
console.log(h) // agr mesmo que eu altere o valor de f o valor de h será o mesmo







