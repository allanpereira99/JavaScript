// Do while

function rand(max = -1, min = 10) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
let opcao 

do {
    opcao = rand()
    console.log(opcao)
}
while(opcao != -1)
console.log('ate a proxima') 