const nums = [1,2,3,4,5]

const newNums = nums.map(function(e){
    return e * 2
})
console.log(newNums)

const triplo = e => e *3

let result = nums.map(function(e){
    return e * 2
}).map(triplo)

console.log(result)


////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const carrinho = ['{"nome": "Borracha", "preco": 3.40}',
'{"nome": "caderno", "preco": 3.50}',
'{"nome": "caneta", "preco": 5.10}',
'{"nome": "lapis", "preco":1.50}'
]
const ParaObjeto = json => JSON.parse(json)

const apenasPreco = produto => produto.preco
const resultado = carrinho.map(ParaObjeto).map(apenasPreco)
console.log(resultado)
