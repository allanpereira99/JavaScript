const {  range,random } = require('lodash')

function Cpf() {
    const radom = random(11111111111, 99999999999)
    let newCpf = radom.toString().slice(0, 9)
    let r = 10
    let total = 0
    for (let index in range(19)) {
        if (index > 8) {
            index -= 9
        }
        total += newCpf[index] * r
        r -= 1

        if (r < 2) {
            r = 11
            let d = 11 - (total % 11)
            if (d > 9) {
                d = 0
            }
            total = 0
            newCpf += d

        }

        }
        return newCpf
    }
    console.log(Cpf())