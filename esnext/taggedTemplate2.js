function real(partes, ...valores) {
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
    })
    return resultado.join('')
}

const preco = 29.99
const precoParcela = 11

console.log(real`1x de ${preco} ou em 3x de ${precoParcela}.`)

//esse exemplo não rodou de jeito nenhum.



