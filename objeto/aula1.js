// getters and setters

const carro = {
    _modelo: 'gol',
    _ano: 2021,
    set modelo(modelo) {
        this._modelo = modelo
    },
    get modelo() {
        return this._modelo
    },
    set ano(ano) {
        this._ano = ano
    },
    get ano() {
        return this._ano
    }

}
console.log(carro.ano, carro.modelo)
carro.modelo = 'uno'
carro.ano = 2022
console.log(carro.ano, carro.modelo)