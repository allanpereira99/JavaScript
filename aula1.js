// Type Number

const peso1 = 1.0
const peso2 = Number("2.0")
console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const total = peso1 * peso2 + 5.6 * 8.2

console.log(total.toFixed(2))
console.log(total.toString(2)) // Numero binario
console.log(typeof total, typeof peso1, typeof peso2)

console.log(7/0)

console.log(10 / "5")

console.log((5).toString(2))

console.log(Math.sqrt(25)) // Raiz Quadrada

console.log(Math.pow(20, 2)) // Potenciação 