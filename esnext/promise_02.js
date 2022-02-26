function esperarPor (tempo = 2000) {
    return new Promise (function (resolve){
        console.log('Chamando função...')
        setTimeout(function(){
            resolve()
        }, tempo)
    })
}

esperarPor(3000)
    .then(() => esperarPor())
    .then(() => esperarPor)