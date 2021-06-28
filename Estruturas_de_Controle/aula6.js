// break , continue

let valor = [1,0,2,3,4,5,6,7,8,9,10,11,14,16,12]

for (let x in valor){
    if(x ==5){
        break
    }
    console.log(x)
}

for (let y in valor){
    if(y ==5){
        continue
    }
    console.log(y)
}

externo : for (let a in valor){
    for(let b in valor){
        if ( a >6  && b > 6){
        break externo
        }
        console.log(`a = ${a}!, b = ${b}!`)
    }
}