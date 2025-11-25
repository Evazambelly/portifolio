/* "CLOSURES" */

function retornaFuncao (nome) {
    return function () {
        return nome;
    };
}

const funcao = retornaFuncao('Gustavo');
console.log (funcao());












