const pessoa = {
    nome: 'allan',
    idade: 22,
    endereco: {
        rua: 'campo alto',
        numero: 30
    }
}

const { nome, idade } = pessoa // Operador: Destructuring
console.log(nome, idade)

const{endereco: {rua,numero}}= pessoa
console.log(rua,numero)

const [a] = [10]
console.log(a)

const [n1,n2, ,n4, ,n5=0] = [1,2,3,]
console.log([n1,n2,n4,n5])