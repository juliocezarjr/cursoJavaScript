function exibeOuNao (valor, chanceErro) {
    return new Promise((resolve, erro) => {
        if (Math.random() < chanceErro) {
            erro('Deu erro!')
        }else {
            resolve(valor)
        }
    })
}

exibeOuNao('Executando função...', 0.2)
    .then(texto => console.log(`Valor resolvido: ${texto}`))
    .catch(err => console.log(`Ocorreu um erro: ${err}`))
