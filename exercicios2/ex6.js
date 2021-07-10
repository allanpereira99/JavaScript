function inverso(valor){
    result = typeof valor
    if (result==='boolean'){
        return !valor
    }
    else if (result == 'number'){
        return -valor
    }
    else{
        return 'valor recebido invalido, valores aceito apenas number e boolean'
    }
}

console.log(inverso(1))