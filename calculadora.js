alert('Seja bem vindo')

function areaTriangulo(){
const base = prompt('Qual eh a base do triangulo?')
const altura = prompt('Qual eh a altura do triangulo?')
return base * altura / 2
}

function areaRetangulo(){
    const base = prompt('Qual eh a base do retangulo?')
    const altura = prompt('Qual eh a altura do Retangulo?')
    return base * altura
}

function areaQuadrado(){
    const lado = prompt('Qual eh a medida do lado do quadrado?')
    return lado * lado
}

function areaTrapezio(){
    const baseMaior = parseFloat(prompt('Quanto eh a base maior do trapezio?'))
    const baseMenor = parseFloat(prompt('Quanto eh a base menor do trapezio?'))
    const altura = prompt('Informe a altura')
    return (baseMaior + baseMenor) * altura / 2
}

function areaCirculo(){
    const raio = prompt('Quanto eh o raio do circulo?')
    return raio * raio * (3,14)
}

function exibirMenu(){
    return prompt(
        'Calculadora geometrica\n' +
        'a)Calcular area do triangulo\n' +
        'b)Calcular area do retangulo\n' +
        'c)Calcular area do quadrado\n' +
        'd)Calcular area do trapezio\n' +
        'e)Calcular area do Circulo\n' +
        'f)Sair'
    )
}

function executar(){
    let option = ''

    do { 
        option = exibirMenu()
        let resultado

        switch(option){
            case 'a':
              resultado = areaTriangulo()
              break
            case 'b':
              resultado = areaRetangulo()
              break
            case 'c':
              resultado = areaQuadrado()
            break
            case 'd':
              resultado = areaTrapezio()
            break
            case 'e':
              resultado = areaCirculo()
            break
            case 'f':
              alert('Encerrando')
            break
            default:
                alert('Opcao invalida')
            break
       }
       if(resultado){
        alert('O resultado eh: ' + resultado)
       }
    }while(option !== 'f')
}

executar()