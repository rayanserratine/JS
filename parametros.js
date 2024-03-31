function dobro(x){
alert('O dobro de ' + x + ' eh ' + (x * 2))
}

dobro(5)
dobro(7)

function dizerOla(nome){
    alert('Ola, ' + nome + '!')
}

dizerOla('Rayan')
dizerOla('Pedro')

function soma(a,b){
    alert('O resultado da soma eh ' + (a + b))
}

soma(2, 4)

function criarUsuario(nome, email, senha, tipo = 'admin'){
    const usuario = {
        nome: nome, //quando as propriedes sao iguais pode ser usado so nome,
        email: email,
        senha: senha,
        tipo: tipo
    }
    console.log(usuario)
}

criarUsuario('Rayan', 'rayan.serratine@gmail.com', 'citos1320')