let pessoa = {
    nome:'Rayan',
    Idade: 29,
    dizerOla(){
        console.log('Ola, mundo eu sou o ' + this.nome)
    }
}

console.log(pessoa)

pessoa.dizerOla()
console.log(pessoa.nome)

pessoa = {
    nome: 'Pedro',
    idade: 30
}

console.log(pessoa)