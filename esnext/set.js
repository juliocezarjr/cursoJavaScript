// não aceita repetição e não é indexado
const times = new Set()

times.add('Vasco')
times.add('São Paulo')
times.add('Flamengo').add('Palmeiras').add('Corinthians')

times.add('Vasco')

console.log(times)
console.log(times.size)
