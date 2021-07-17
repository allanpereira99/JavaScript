/* 
Objetivo deste projeto
é pegar uma fumcionaria mulher chinesa 
com menor salario de uma lista de funcionarios 
em um arquivo json 
*/

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const china = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const func = (salarioAtual,menorSalario) => {
    return salarioAtual.salario < menorSalario.salario  ? salarioAtual: menorSalario
}

axios.get(url).then(response => { 
    const funcionarios = response.data
    const mulheresChinesas = funcionarios.filter(china).filter(mulheres).reduce(func)
    console.log(mulheresChinesas)
})
