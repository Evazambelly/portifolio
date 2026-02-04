// " OBJETO.DEFINEPROPERTY "


function produto (nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque',{
    enumerable: true,
    value: estoque,
    writable: true,
    configurable: true
    });
}

const p1 = new produto ('Camisa', 30, 3);
console.log (Object.keys(p1));

for (let chave in p1) {
    console.log(chave);
}




