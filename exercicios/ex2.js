function delta(a, b, c) {
    const delta = (Math.pow(b, 2)) - (4 * a * c)
    if (delta < 0) {
        return 'Delta é negativo'
    }
    else {
        return delta
    }
}
console.log(delta(5, 2, 3))
