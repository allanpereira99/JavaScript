//exemplo basico de função


// Com retorno

function saudacao(nome){
    const msg = `Ola ${nome}, Seja Bem Vindo!`
    return msg  
}

console.log(saudacao('allan'))

// Sem retorno 

function soma(a,b){
    console.log(a+b)
}

soma(10,5)