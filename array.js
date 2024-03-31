let heroes = ['miranha', 'Thanos', 'Wolverine', 'Thor', 'Gavigod', 'Hulk']

heroes[0] = 'Miranha'


heroes[1] = 'Thanos'

let size = heroes.push('Loki')

console.log(heroes)

size = heroes.unshift('Venom')

console.log(size)

let last = heroes.pop()

console.log(heroes)
console.log(last)

last = heroes.shift()
console.log(heroes)
console.log(last)

let search = heroes.includes('Thor')
console.log(search)

const indice = heroes.indexOf('Hulk')
console.log(indice)

const avengers = heroes.slice(0,3)
const vilains = heroes.slice(-3)
console.log(heroes)
console.log(avengers)
console.log(vilains)

const marvel = avengers.concat(vilains, 'doc oc', 'strange')
console.log(marvel)

const removed = marvel.splice(indice, 1, 'abominavel')
console.log(marvel)
console.log(removed)

for(let indice = 0; indice < marvel.length; indice++) {
    const element = marvel[indice]
    console.log(element + ' se encontra na posicao ' + indice)
}