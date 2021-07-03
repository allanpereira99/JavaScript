function Pessoa(nome) {

    this.nome = nome

    this.falar = function () {
        console.log(`Meu nome é ${nome}`)
    }

}

const p1 = new Pessoa('allan')
p1.falar()
const p2 = new Pessoa('aila')
p2.falar()
