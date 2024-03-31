alert('Seja bem vindo!')
let imoveis = []
let question = ''

do{ 
    question = prompt('Imoveis cadastrados: ' + 
    imoveis.length + 
    '\n O que deseja fazer? \n\n1)Cadastrar novo imovel \n2)Mostrar imoveis cadastrados \n3)Sair')

switch(question){
    case '1':
        const imovel = {}

        imovel.proprietario = prompt('Qual o nome do proprietario?')
        imovel.quartos = prompt('Quantos quartos?')
        imovel.banheiro = prompt('Quantos banheiros?')
        imovel.garagem = prompt('Tem garagem? (sim/nao)')

        const confirma = confirm('Salvar este imovel?\n' +
        '\nProprietario: ' + imovel.proprietario +
        '\n Quartos: ' + imovel.quartos +
        '\n Banheiros: ' + imovel.banheiro +
        '\n Garagem: ' + imovel.garagem)

        if(confirma){
            imoveis.push(imovel)

        }
        break
        case '2':
            for(let i = 0; i < imoveis.length; i++){
                alert('Imovel ' + (i + 1) + 
                '\nProprietario: ' + imoveis[i].proprietario +
                '\nQuartos: ' + imoveis[i].quartos +
                '\nBanheiros: ' + imoveis[i].banheiro +
                '\nGaragem: ' + imoveis[i].garagem)
            }
            break
        case '3':
            alert('Encerrando')
            break
            default:
                alert('Opcao invalida')
}


}while(question !== '3')