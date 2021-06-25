// while

function rand(max , min) {
    const valor = Math.random() *(max - min) + min
    return Math.floor(valor) 
}

let opcao = 0

while (opcao != -1){
    opcao = rand(-1, 10)
    console.log(opcao)

}
