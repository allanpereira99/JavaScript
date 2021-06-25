// for in 

let valor = [1,0,2,3,4,5,6,7,8,9,10,11,14,16,12]
for (let i in valor){
    console.log(valor[i])
}

const pessoa = {
nome: 'allan',
idade: 22,
pais : 'brazil'

}

for (let i in pessoa){
    console.log(`${i} = ${pessoa[i]}`)
}