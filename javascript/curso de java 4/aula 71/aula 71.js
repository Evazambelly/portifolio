/* "ESCOPO LÉXICO" */


const nome = 'Gustavo';

function falaNome () {
console.log(nome);
}

function usaFalaNome () {
    const nome = 'renata'
    falaNome();
};
usaFalaNome();




