const fs = require('fs')
const path = require('path')

function lerArquivo (caminho) {
    return new Promise (resolve => {
        fs.readFile(caminho, function(err, conteudo) {
            resolve(conteudo.toString())
        })
        console.log('Depois de ler')
    })
}

const caminho = path.join(__dirname, 'teste.html')

lerArquivo(caminho)
    .then(conteudo => console.log(conteudo))

