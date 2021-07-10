const array = [1, 2, 3, 4, 5, 6, 7, 8, 9,'11', 'allan', true, false, "aila", "jullia",10]

function number(array) {
    let newArray = []
    for (let num in array) {
        let tipo = typeof array[num]
        if (tipo == 'number') {
            newArray.push(array[num])
        }
    }
    return newArray
}

console.log(number(array))