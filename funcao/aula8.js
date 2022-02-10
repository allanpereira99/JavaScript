class banco{
  #saldo;
  #nome;
  #conta;
  constructor(nome,conta,saldo=0){
    this.#saldo= saldo;
    this.#nome = nome;
    this.#conta = conta;
  }
  get  info(){
    console.log(Nome: ${this.#nome} \nConta: ${this.#conta});
  }
  get saldo(){
    console.log(Saldo: ${this.#saldo}R$);
  }
  deposito(valor){
    this.#saldo += valor;
  }
}

let c1 = new banco('allan',123,50.00);
//An error will occur as private attributes cannot be modified out of scope
c1.#saldo = 100.00;
c1.#nome = 'pedro';
c1.#conta = 321;
