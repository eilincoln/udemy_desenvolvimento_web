function mudarCorFundo() {
    let listaCores = ['red', 'yellow', 'pink', 'green', 'blue']
    let randonListaCores = listaCores[Math.floor(Math.random() * listaCores.length)]
    document.body.style.backgroundColor = randonListaCores
}