function multiplicador(num1,num2){
    if (num1 >= 0 && num2 >=0){
        let Result = 0
        for (let i =0; i <num2;i++){
            Result +=num1
        }
        return Result
    }
}
console.log(multiplicador(10,10))