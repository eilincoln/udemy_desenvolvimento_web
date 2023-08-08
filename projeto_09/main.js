let idade = prompt('Digite a sua idade: ')
let temTitulo = prompt('Tem titulo de eleito? (sim /não): ')
let idadeMinima = 18

if (idade >= idadeMinima && temTitulo == 'sim') {
    console.log('Você pode votar! :)')
} else if (idade >= idadeMinima && temTitulo == 'não') {
    console.log('Você precisa de um titulo para votar.')
} else if (idade < idadeMinima && temTitulo == 'sim' || temTitulo == 'não') {
    console.log('Você ainda não tem idade minima para votar.')
}