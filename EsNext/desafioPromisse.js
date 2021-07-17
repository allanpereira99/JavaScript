const fs = require('fs')
 function path(path){
     return new Promise(resolve => {
        const conteudo = fs.readFileSync(path,'utf-8')
        resolve(conteudo)
     })

 }
 path(__dirname +'/oi.txt')
.then(a=>console.log(a))