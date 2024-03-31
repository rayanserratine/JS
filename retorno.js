/*function calcularMedia(a, b){
    const media = (a + b)/2
   return media
}

const resultado = calcularMedia(10, 4)
console.log(resultado)

function criarProduto(nome, preco){
    const produto = {
        nome,
        preco,
        estoque: 1
    }
    return produto
}

const notebook = criarProduto('Dell', 1500)
const carro = criarProduto('Mazda', 2000)
console.log(notebook)
console.log(carro)
console.log(criarProduto('Iphone 10', 3000))

function areaRetangular(base, altura){
    return base * altura
}

console.log(areaRetangular(10, 6))

function areaQuadrada(lado){
    return areaRetangular(lado, lado)
    
}

console.log(areaQuadrada(5))

function maioridade(idade){
    if(idade >= 18){
        return 'Maior de idade'
    } else{
        return 'Menor de idade'
    }
}

console.log(maioridade(15))
console.log(maioridade(19))


function divisao(a, b){
const dividir = (a/b)
return dividir
}

console.log(divisao(10, 2))
console.log(divisao(40, 4))*/



function criarPerfil(nome, idade, pais, especie = 'humana'){
const perfil ={
    nome,
    idade,
    pais,
    especie
}
console.log(perfil)
}

criarPerfil('Rayan', 29, 'Brasil')
criarPerfil('Tomas', 35, 'Canada')

