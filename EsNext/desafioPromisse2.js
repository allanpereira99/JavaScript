const fs = require('fs')
 function path(path){
     return new Promise(resolve => {
    fs.readFile(path,function(_, conteudo){
        resolve(conteudo.toString())
     })
    })

 }
 path(__dirname +'/oi.txt')
.then(a=>console.log(a))