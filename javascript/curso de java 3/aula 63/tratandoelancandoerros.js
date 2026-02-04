// "Tratando e lançando erros (try, catch, throw)"

try { // try = tente
    console.log(naoexisto);
} catch (err) { // catch = execute caso try não funcione
    console.log ('naoexisto não existe.');
}


function soma (x, y) {
    if (typeof x !== 'number' || 
        typeof y !== 'number'){
    throw ('x e y precisam ser números.');
}
    return x + y ;
}

try{
    console.log(soma(1,2));
    console.log(soma('1', 2));
} catch (err) {
    console.log(err);
}





