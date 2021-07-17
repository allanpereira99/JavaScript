const aprovados = ['allan', 'jullia','akira', 'aila']
aprovados.forEach(function(nome,indice,array){
    console.log(`[${indice + 1}] ${nome} ${array}`)
}
)

aprovados.forEach(nome  => console.log(nome))

const fun = (nome, indice) => console.log(nome,indice)

aprovados.forEach(fun)



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// meu foreach
Array.prototype.forEach2 = function (nome){
    for (let i = 0; i < this.length; i++){
        nome(this[i],i,this)
    }
}

aprovados1.forEach2(function(nome,indice,array){
    console.log(`[${indice + 1}] ${nome} ${array}`)
}
)
