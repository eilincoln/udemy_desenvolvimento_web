let randonNumber = Math.floor(Math.random() * 100)
let tries = 0
console.log(randonNumber)

function checkGuess() {
    let guess = document.getElementById('guess').value
    let message = document.getElementById('message')
    tries++

    if(guess == randonNumber) {
        message.innerHTML = 'Congratulations, you guessed the number in ' + tries + ' tries!'
    } else if (guess < randonNumber) {
        message.innerHTML = 'Too low. Try again!'
    } else {
        message.innerHTML = 'Too high. Try again!'
    }
}
