// ? :
// (condiçao) ? 'valor para verdadeiro' : 'valor para falso' 

const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Normal';
console.log (nivelUsuario);
//if (pontuacaoUsuario >= 1000) {
//    console.log ('Usuário VIP');
//} else {
//    console.log ('Usuário normal');
//}

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

console.log (nivelUsuario, corPadrao);


