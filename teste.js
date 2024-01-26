class Pessoa {
  constructor(nome, idade) {
    this.nome = nome
    this.idade = idade
  }
  cumprimentar() {
    console.log('olá, meu nome é ' + this.nome)
  }
}

const adam = new Pessoa('Adam Ondra', 29)
adam.cumprimentar()

const janja = new Pessoa('Janja Garnbret', 23)
janja.cumprimentar()