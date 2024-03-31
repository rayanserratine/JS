let deck = []
let question = ''

do{
   
 
    question = prompt('Pilha de cartas:  \n'+  deck.length + '\nO que deseja fazer?\n 1)Adicionar carta \n 2)Retirar carta \n 3)Sair')

    switch(question){
        case '1':
            let add = deck.push(prompt('Qual carta?'))
            break
            case '2':
                let take = deck.pop()
                alert('A carta tirada foi ' + take)
                break
                case '3':
                    alert('Encerrando')
                    break
                    default:
                        alert('Opcao indisponivel')
    }



}while(question !== '3')