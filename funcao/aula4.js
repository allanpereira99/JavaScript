//funcao construtora

class Carro {
    constructor(VelocidadeMax = 200, delta = 5) {
        let velocidadeatual = 0


        this.acelerar = function () {
            if (velocidadeatual + delta <= VelocidadeMax) {
                velocidadeatual += delta

            }

            else {

                velocidadeatual = VelocidadeMax

            }

        }

        this.getVelocidadeAtual = function () {
            return velocidadeatual

        }

    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())