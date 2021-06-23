const list = []
for (let i=0; i <10; i++){
    list.push(function (){
        console.log(i)
    })
}
list[1]()
list[2]()
list[0]()