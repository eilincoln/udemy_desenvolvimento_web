let valorConta = 0
let gorjeta = 0
let valorTotal = 0


valorConta = parseFloat(prompt('Digite o valor da conta: '))
gorjeta = parseFloat(prompt('Digite o valor da gorjeta (em decimal): '))

// MODO 01
// gorjeta = (valorConta * gorjeta) / 100
// valorTotal = valorConta + gorjeta

// MODO 02
// valorTotal = valorTotal + valorConta
// valorTotal = valorTotal + (valorConta * gorjeta) / 100

// MODO 03
valorTotal += valorConta
valorTotal += (valorConta * gorjeta) / 100

//São várias formas de se fazer, para poder chegar no mesmo resultado.

alert('O valor total da gorjeta é de $' + valorTotal)