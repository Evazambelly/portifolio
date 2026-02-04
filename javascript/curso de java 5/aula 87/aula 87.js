// " FILTER MAP REDUCE "


const numeros = [35, 92, 44, 13, 2, 8, 19, 53];
const numerosPares = numeros
.filter(valor => valor % 2 === 0)
.map(valor => valor *2)
.reduce((ac, valor) => ac + valor);

console.log(numerosPares);






