function Banco(nome,conta,saldo=0){
  let _nome = nome;
  let _conta = conta;
  let _saldo = saldo;
  this.info = () => {console.log(`Nome: ${_nome} \nConta: ${_conta} \nSaldo: ${_saldo}R>
  this.deposito = valor => { _saldo += valor;}
  }

let p1 = new Banco('allan',123,20.00)
p1.info()
p1._saldo = 500.00
p1.deposito(500)
p1.info()
//no error will occur and private methods cannot be accessed from outside the constructor function
p1._nome = 'alex'
p1.info()
p1._conta=321
p1.info()
