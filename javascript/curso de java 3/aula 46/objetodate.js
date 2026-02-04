//const tresHoras = 60 * 60 * 3 * 1000;
//const umDia = 60 * 60 * 24 * 1000; // um dia em milessimos de segundo
//const date = new Date(0 + tresHoras + umDia); // 01/01/1970 timestamp  unix ou época unix
//console.log (date.toString());

//const date = new Date(2019, 3, 3, 15, 30, 27, 999); // ano, mes, dia, hora, minuto, segundos, milessimos
//console.log(date.toString());

//*const date = new Date('2019-04-20 20:20:59');
//console.log('Dia', date.getDate());
//console.log ('Mes', date.getMonth() + 1); // mes começa do zero
//console.log ('Ano', date.getFullYear());
//console.log ('Hora', date.getHours());
//console.log ('Min', date.getMinutes());
//console.log ('Seg', date.getSeconds());
//console.log ('ms', date.getMilliseconds());
//console.log ('Dia semana', date.getDay()); //0 -  Domingo, 6 - sabado
//console.log(date.toString());


function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`
}
function formataData(data) {
    const dia = zeroAEsquerda (data.getDate());
    const mes = zeroAEsquerda (data.getMonth() + 1);
    const ano = zeroAEsquerda (data.getFullYear());
    const hora = zeroAEsquerda (data.getHours());
    const min = zeroAEsquerda (data.getMinutes());
    const seg = zeroAEsquerda (data.getSeconds());
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);

