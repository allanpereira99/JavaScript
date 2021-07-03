function Triangulo(lado1, lado2, lado3) {

    if (lado1 == lado2 && lado2 == lado3) {
        return 'equilatero'
    }
    if (lado1 == lado2 && lado1 != lado3 || lado2 == lado3 && lado2 != lado1 || lado1 == lado3 && lado3 != lado2) {
        return 'Isósceles'

    }
    else {
        return 'Escaleno'
    }
}

console.log(Triangulo(5, 10, 18))