// Avaliação de curto-circuito
// && -> false && true -> false = se encontrar uma expressão falsa posso parar ali mesmo, fazendo uma avaliação de curto circuito
// || 
// FALSY
// * false 
// 0
// '' ""
// null / undefined
// NaN


console.log('luiz' && 'Maria'); // como não são strings vazias vai me retornar com a ultima expressão encontrada
// mais se tiver qualquer valor falsy, irá retornar como false

console.log(0 || false || null || 'Tata' || true); // vai retornar apenas a string, pq é um valor verdadeiro, e é o primeiro que aparece então ele foca nesse

const corUsuario = null;
const corPadrao = corUsuario || 'preto';
console.log(corPadrao);
//*** 
const corUsuario1 = 'vermelho';
const corPadrao1 = corUsuario || 'preto';
console.log(corPadrao1);

// sempre que todos são avaliados em falso a ultima expressão será executada
