//Factory vs Class


/*Factory*/function Pessoa(name, lastName) {
    return {
        nome: name,
        sobreNome: lastName
    }

}
console.log(Pessoa('allan', 'pereira'))
console.log(Pessoa('ailana', 'pereira'))

/*Class*/class Pessoa1 {

    constructor(name1) {
        this.name1 = name1

    }
    falar() {
        console.log(`Meu nome é ${this.name1}`)
    }


}

const p1 = new Pessoa1('allan')
p1.falar()

const pessoa = nome2 => {
    return {
        falar1: () => console.log(`Meu nome é ${nome2}`)
    }
}

const p2 = pessoa('ailana')
p2.falar1()