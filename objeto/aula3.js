//JSON
const obj = {a:1, b:2,c:3,d:4,soma(){return a+b+c+d}}
console.log(JSON.stringify(obj))
console.log(JSON.parse('{"a":1, "b":2, "c":3}'))//todo atributo em JSON tem que estar em ""
console.log(JSON.parse('{"nome":"allan","sobrenome": "pereira"}'))