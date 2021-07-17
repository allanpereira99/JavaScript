//filter
const carrinho = [{nome: "Borracha", preco: 3.40, fragil: true},
{nome: "caderno", preco: 3.50, fragil: false},
{nome: "caneta", preco: 5.10, fragil: true},
{nome: "lapis", preco: 1.50, fragil: false}
]

console.log(carrinho.filter(function (produto){
    return produto.preco >= 3.50
}))


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const caro = produto => produto.preco > 3.00
const fragil = produto => produto.fragil === true

console.log(carrinho.filter(caro).filter(fragil))

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  Array.prototype.filter2 = function(nome){
    const newArray = []
    for (let i = 0; i < this.length; i++){
        if (nome(this[i],i,this))
            newArray.push(this[i])
    }
    return newArray
  }
  console.log(carrinho.filter2(caro).filter2(fragil))
