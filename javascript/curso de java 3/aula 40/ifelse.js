// if, else if e else

// if pode ser usado sozinho 
// sempre que ultilizo a palavra else eu presiso de um if antes
// eu posso ter varios else ifs na checaguem
// so posso ter um else sozinho na condição
// podemos usar condições sem else if, ultilizando apenas if e else

// Entre 0 - 11 = Bom dia 
// Entre 12 - 17 = Boa tarde
// Entre 18 - 23 = Boa noite


const hora = 50;
if (hora >=0 && hora <= 11) {
    console.log ('Bom dia');
}
else if (hora >= 12 && hora <= 17){
console.log('Boa tarde');
}
else if (hora >= 18 && hora <= 23){
    console.log('Boa noite');
}
else {
    console.log('Olá');
}


const tenhoGrana = true ;

if (tenhoGrana) {
    console.log('Vou sair de casa');
} else {
    console.log('Não vou sair de casa');
}























