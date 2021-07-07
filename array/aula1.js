const array = [1,2,3,4,5,6,7,8,9,10]

array.pop()
console.log(array) //remove o ultimo item
array.shift() // remove o primeiro item
console.log(array)
delete array[0] //deleta um item pelo indice
console.log(array)
array.splice(0,0,11,12,13,14,15,16)
console.log(array)//splice pode add ou remover itens
array.splice(0,4)
console.log(array)
array.push(10) // add um item no final
console.log(array)
array.unshift(17)// add um iten no inicio 
console.log(array)
const newArray = array.slice(3,6) //retorna um novo array comecando pelo indice informado
console.log(newArray)
array.sort()// ordena array
console.log(array)