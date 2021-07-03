function Fruta(name) {
    switch (name) {
        case 'maça':
            return 'Não vendemos esta fruta aqui'
            break
        case 'kiwi':
            return 'Estamos com escassez de kiwis'
            break
        case 'melancia':
            return 'Aqui está, são 3 reais o quilo'
            break
        default:
            return 'Erro fruta nao catalogada'
            break
    }

}

console.log(Fruta('kiwi'))