// Mais diferenças entre var e let/const


// let = cria variável, não se pode redeclarar, mas tem escopo de bloco ex {...bloco}
// var = cria variável, pode redeclarar, var só tem escopo de funçao

/*const verdadeira = true;

let nome = 'Tata'; // criando nesse bloco
var nome1 = 'Tata';

if (verdadeira) {
    let nome = 'Ondy'; // recriando nesse bloco
    //console.log(nome, nome1);

    if (verdadeira) {
        let nome = 'Outra coisa'; // recriando nesse bloco
        console.log(nome, nome1);
    }
}*/



/*const verdadeira = true;

let nome = 'Tata'; 
var nome1 = 'Tata';

if (verdadeira) {
    let nome = 'Eva';  //criando
    var nome1 = 'Paula' // redeclarando

    if (verdadeira) {
        let nome = 'Outra coisa'; 
        var nome1 = 'Eva'; //Redeclarando

    }
}
console.log (nome, nome1)*/



/*function falaOi () {
    console.log ('Oi');
}
falaOi();*/



/*function falaOi () {
 var nome = 'Tata'
}

console.log (nome); // não da pra pegar uma var  de dentro de uma funçao
falaOi();*/





