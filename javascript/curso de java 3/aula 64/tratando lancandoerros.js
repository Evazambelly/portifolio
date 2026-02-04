// "TRATANDO E LANÇAONDO ERROS (TRY, CATCH, FINALLY)"


/*try {
// é executado quando não há erros
}catch (e) {
// executado quando a erros
} finally {
    //sempre
}*/

/*try {
console.log ('Abri um arquivo');
console.log ('Manipulei um arquivo e gerou um erro');
console.log ('Fechei o arquivo')
}catch (e) {
console.log ('Tratando o erro');
} finally {
console.log ('Eu sempre sou executado')
}*/

function retornaHora (data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instancia do Date.');
    }
    if (!data) {
        data = new Date();
    }
    return data.toLocaleTimeString ('pt-BR',{
    hour12: false
    });
}
const data = new  Date('01-01-1970 12:58:12')
const hora = retornaHora(data);
console.log (hora);








