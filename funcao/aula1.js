function fun(a, b) {
  let total = a + b
  console.log(total)
}

const fun2 = function () { }
const array = [function fun3(a, b) { return a - b }, fun, fun2]
console.log(array[0](5, 9))

const obj = {}
obj.falar = function (name) { return `oi ${name}` }

console.log(obj.falar("allan"))

//

function soma(a, b) {
  return function (c) {
    console.log(a + b + c)
  }
}

soma(5, 8)(2)
//or
const soma2 = soma(5, 5)
soma2(2)