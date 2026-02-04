/* " funçaoes imediatas" */

/*(function(){
const nome = 'Rogerio'
console.log (nome)
})();

const nome = 'Gustavo'
console.log (nome)*/



(function(){
    const sobrenome = 'Goiz'
    function criaNome (nome) {
        return nome +' '+ sobrenome;
    }

    function falaNome () {
        console.log (criaNome('João'));
    }

    falaNome();
    
})();




















