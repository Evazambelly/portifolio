// "EXERCÍCIOS COM NODELIST "

// 
// 

const paragrafos = document.querySelector ('.paragrafos'); // selecionar o primeiro elemento
const ps = document.querySelectorAll ('p'); // selecionar varios elementos

const estilosBody = getComputedStyle(document.body) // pega todos os estilos computados no body
const backgroudColorBody = estilosBody.backgroundColor;// pega a cor de fundo do body
console.log (backgroudColorBody);


for (let p of ps) {
    p.style.backgroundColor = backgroudColorBody; // para mudar a cor do paragrafo
    p.style.color = '#FFFFFF'; // muda a cor do texto
}






