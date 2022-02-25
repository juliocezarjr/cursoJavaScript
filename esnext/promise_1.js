let p = new Promise(function(resolve){
    resolve(["Julio", "Anna", "Sofia", "Wilson"])
})

p
    .then(outrovalor => outrovalor[0])
    .then(letraEncontrada => letraEncontrada.toLowerCase())
    .then(colecaoDeValores => colecaoDeValores[0])
    .then(console.log)


