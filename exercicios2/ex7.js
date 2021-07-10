function ente(numero,minimo,maximo,incluso= false){
    if(incluso) return numero >= minimo && numero <= maximo

    return numero > minimo && numero < maximo
}

console.log(ente( 3,4,2,true))