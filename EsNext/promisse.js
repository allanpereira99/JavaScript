function radom(min, max) {
    if (min > max) [min, max] = [max, min]

    return new Promise(resolve => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
    })
}

radom(1, 100)
    .then(a => console.log(a))