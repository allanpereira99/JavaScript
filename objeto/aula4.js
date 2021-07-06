//class 

class Lancamento {
    constructor(nome = "generico", valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class Financeiro{
    constructor(mes, ano){
        this.mes = mes 
        this.ano =ano
        this.lancamentos = []
    }
    addLancamentos(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }
    sumario(){
        let valorCons=0
        this.lancamentos.forEach(l => {
            valorCons += l.valor
        })
        return valorCons
    }
    
}
const salario = new Lancamento('Salario',45000)
const contaDeLuz = new Lancamento('luz', -220)
const contas = new Financeiro(6,2021)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())