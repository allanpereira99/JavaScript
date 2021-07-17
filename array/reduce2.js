const carrinho = [{nome: "Borracha", preco: 3.40, fragil: true},
{nome: "caderno", preco: 3.50, fragil: false},
{nome: "caneta", preco: 5.10, fragil: true},
{nome: "lapis", preco: 1.50, fragil: false}
]

const resultado = (result,fragil)=> result && fragil
console.log( carrinho.map(a=>a.fragil).reduce(resultado))
const resultado2 = (result,fragil)=> result || fragil
console.log( carrinho.map(a=>a.fragil).reduce(resultado2))