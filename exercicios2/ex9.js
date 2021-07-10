function repetir(valor, vezes) {
    const array = []
    for (let i = 0; i < vezes; i++) {
        array.push(valor)
    }
    return array
}
console.log(repetir('allan', 10))