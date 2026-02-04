// "While e Do While - estrutura de repetição"

// while = checa a condiçao e executa o laço
// Do while = primeiro executa e depois checa a condição

/*let i = 0;

while (i <= 10) {
 console.log (i);
 i++; // não  esquecer pq cria um laço infinito sem isso
}*/


/*function random(min, max) {
    const r = Math.random() * (max - min) + min
    return Math.floor(r);
}

let rand = random (1, 50);
console.log (rand);*/


function random(min, max) {
    const r = Math.random() * (max - min) + min
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = 10 ;


while (rand !== 10) {
console.log (rand);
}

console.log('#######')

do {
   console.log (rand)
} while (rand !== 10);

