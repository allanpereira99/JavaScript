let Pontuacao = [10, 20, 20, 8, 25, 3, 0, 30, 1]
function avaliaPontuacao(a) {
    let qtdQuebraRecordes = 0
    let piorJogo = 0
    let maiorPontuacao = a[0]
    let menorPontuacao = a[0]
    for (let i = 0; i <=Pontuacao.length; i++) {
        console.log(i)
        if (a[i] > maiorPontuacao) {
            maiorPontuacao = a[i]
            qtdQuebraRecordes++
        }

        else if (a[i] < menorPontuacao) {
            menorPontuacao = a[i]
            piorJogo = i + 1
        }

    }
    return [qtdQuebraRecordes, piorJogo]

}

console.log(avaliaPontuacao(Pontuacao))
