const objeto = {1: 2, 3: 4, 5: 6, 7: 8, 9: '11', 'allan': true, false: "aila", "jullia": 10}

function objetoParaArray(objeto) {
    const resultado = []
    for (let chave in objeto)
        resultado.push([chave, objeto[chave]])
    return resultado
}

console.log(objetoParaArray(objeto))