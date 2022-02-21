falarDepois = (tempo, frase) => {
    tempo = tempo * 1000
    setTimeout(() => console.log(frase), tempo)
}

falarDepois(3, "Deu certo")


// const frase = 'Deu certo'

// setTimeout(()=>console.log(frase), 2000)