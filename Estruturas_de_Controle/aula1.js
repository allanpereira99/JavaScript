// switch case

const imprimirResultado = function (nota) {
    switch(Math.floor(nota)){
        case 10:
            console.log('parabens nota maxima')
            break
        case 5:
            console.log('aprovado')
            break
        case 4:
                console.log('reprovado')
            break
        case 0:
            console.log('precisa estudar mais')
            break
    }
    
}

imprimirResultado(10)