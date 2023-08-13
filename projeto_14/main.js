let colorList = []

for (let i = 1; i <= 3 ; i++){
    let userColor = prompt(`Digite sua cor #${i}:`);
    colorList.push(userColor);
}

document.getElementById('listaCores').innerHTML = colorList

// alert('Sua lista de cores ficou assim: ' + colorList)