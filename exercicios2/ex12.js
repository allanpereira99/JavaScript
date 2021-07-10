function removerPropriedade(objeto, nomeDaPropriedade) {
    const copia = Object.assign({}, objeto)
    delete copia[nomeDaPropriedade]
    return copia
}
console.log(removerPropriedade({ 'name': 'allan', 'idade': 22 }, 'name'))