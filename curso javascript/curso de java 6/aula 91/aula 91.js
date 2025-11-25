
// " OBJETO.DEFINEPROPERTY "


function produto (nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque',{
    enumerable: true,
    configurable: true,
    get: function () {
        return estoque;
    },
    set: function (valor) {

    }
    });
}

const p1 = new produto ('Camisa', 30, 3);
p1.estoque = 'Valor que eu quero'
console.log (p1.estoque);


