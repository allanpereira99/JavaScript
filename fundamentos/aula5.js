// Type boolean

let isAtivo = false
console.log(!isAtivo)
console.log(!!isAtivo)
console.log(!!!isAtivo)
console.log(!!0)
console.log(!!1)
console.log(!!-1)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)

console.log(!!('' ||0 || '' || 0 || null))

let nome = ''
console.log(!!(nome || 'desconhecido'))
nome = "allan"

console.log(nome || 'desconhecido')
