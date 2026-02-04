/* AS VARIAS MANEIRAS DE DECLARAR FUNÇOES EM JAVA SCRIPT */
/* */ 


function falaOi () {
    console.log ('Oi');
};
falaOi();



const souUmDado = function () {
    console.log ('Sou um dado');
};

function executaFuncao (funcao) {
    funcao ();
};
executaFuncao(souUmDado)



const funcaoArrow = () => {
    console.log ('Sou uma arrow function');
};
funcaoArrow();



const obj = {
    falar: function (){
    console.log ('Estou falando...');
}
};
obj.falar();









