// type array

let  lista = ['maçã', 'banana','uva','pera', 'acerola']

console.log(lista[0], lista[1])
console.log(lista[5]) // undefined

lista.push('melancia') // add um valor na array
console.log(lista[5])

lista.pop() // remove o ultimo valor da array
console.log(lista)

delete lista[1] // remove um valor pelo index
console.log(lista)