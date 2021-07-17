const carrinho = [{nome: "Borracha", preco: 3.40, fragil: true},
{nome: "caderno", preco: 3.50, fragil: false},
{nome: "caneta", preco: 5.10, fragil: true},
{nome: "lapis", preco: 1.50, fragil: false}
]

const resultado = carrinho.map(a =>a.preco).reduce(function(acumulador,atual){
    console.log(acumulador,atual)
    return acumulador + atual
})
console.log(resultado)