//Operadores: Destructuring #02

 function rand({min=0, max=100}) {
     const valor = Math.random() * (max - min) + min
     return Math.floor(valor)
    
}

console.log(rand({0 : 1000}))

//Operadores: Destructuring #03

function rand2([min2 = 0, max2 = 100]) {
    if (min2>max2) [min2, max2]= [max2, min2]
  const valor2 = Math.random()  * (max2-min2) + min2
  return Math.floor(valor2)   
}

console.log(rand2([50, 40]))