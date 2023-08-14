let numberList = document.getElementById('numberList')

let listaFruta = ['Banata', 'Manga', 'Kiwi', 'Maçã', 'Limão']

for (i = 0; i < 5; i++) {
    let listItem = document.createElement('li')
    listItem.appendChild(document.createTextNode(listaFruta[i]))
    // listItem.textContent = 'Item ' + i
    numberList.appendChild(listItem)
}