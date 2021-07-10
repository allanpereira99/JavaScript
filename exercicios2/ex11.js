function array(array){
    const primeiroElemento = array[0]
    const ultimoElemento = array[array.length- 1]
    return [primeiroElemento, ultimoElemento]
}
console.log(array([1,2,3,4,5,6,7,8,9]))