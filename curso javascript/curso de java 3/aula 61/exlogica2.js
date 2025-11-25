/* Escreva uma função chamada ePaisaguem que 
recebe dois argumentos, largura e altura  
de uma imaguem (number)
E retorne true se a imaguem estiver no modo paisaguem*/
const altura = 100
const largura = 200


var a = ePaisagem(altura, largura)

console.log(a)


function ePaisagem (altura, largura) {
    const paisagem = altura < largura 
    return paisagem
    //console.log (paisagem);
    }

/* resolução do pf
function ePaisagem (largura, altura) {
return largura > altura;
}
console.log (ePaisagem(1920,1920));





