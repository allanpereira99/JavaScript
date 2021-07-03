//callback

const notas = [1.8, 2.6, 3.3, 5.5, 5.8, 6.9, 7.9, 8.2]

const notaMenorQue5 = nota => (nota < 5)

nota1 = notas.filter(notaMenorQue5)

console.log(nota1)