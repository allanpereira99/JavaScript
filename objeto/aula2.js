//herança

const carro = Object.preventExtensions({/* previne que o objeto seja expandido */
    _velocidadeMax: 300,
    _velocidadeAtual: 0,
    get velocidade() {
        return this._velocidadeAtual

    },
    acelerar: function acelerar(velocidade) {
        if (this._velocidadeAtual < this._velocidadeMax) {
            return this._velocidadeAtual += velocidade
        }
        else {
            this._velocidadeAtual = this._velocidadeMax
            return console.log(`${this.modelo} atingiu a velocidade maxima , impossivel acelerar!`)
        }


    },

    reduzir: function freiar(reduzir) {

        if (this._velocidadeAtual > 0) {
            return this._velocidadeAtual -= reduzir
        }
        else {
            return console.log(`${this.modelo} esta parado..`)
        }

    },

    status: function status() {
        return `${this.modelo} velocidade atual ${this._velocidadeAtual} e velocidade maxima ${this._velocidadeMax}`
    }
})

const ferrari = Object.seal(/*previne que objeto tenha atributos removidos ou adicionados */ {
    __proto__: carro,
    modelo: 'f40 '
})

const gol = Object.freeze(/*previne que o Objeto seja modificado */ {
    __proto__: carro,
    modelo: 'G5'
    
})

const strada = {
    modelo: 'adventure'
}

Object.setPrototypeOf(strada,carro)

ferrari.acelerar(100)
console.log(ferrari.status())
ferrari.acelerar(100)
console.log(ferrari.status())
ferrari.reduzir(100)
console.log(ferrari.status())
gol.acelerar(50)
console.log(gol.status())
gol.acelerar(50)
console.log(gol.status())
gol.acelerar(200)
console.log(gol.status())
gol.acelerar(50)
gol.reduzir(300)
console.log(gol.status())
gol.reduzir(50)
gol.acelerar(200)
console.log(gol.status())
strada.acelerar(300)
strada.reduzir(100)
console.log(strada.status())
strada.reduzir(250)
console.log(strada.status())
