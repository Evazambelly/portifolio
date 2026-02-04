const numero = Number(prompt('Digite um numero;'));
const numerotitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numerotitulo.innerHTML = numero;

texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}.</p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}.</p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}.</p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}.</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}.</p>`;
texto.innerHTML += `<p>${numero} E NaN: ${Number.isNaN(numero)}.</p>`;

