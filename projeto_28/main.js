const images = [
    'images/image_01.jpg',
    'images/image_02.jpg',
    'images/image_03.jpg',
    'images/image_04.jpg',
    'images/image_05.jpg'
]
let currentIndex = 0

let imageElement = document.getElementById('image');
let buttonElement = document.getElementById('button');

buttonElement.addEventListener('click', function() {
    currentIndex++
    if (currentIndex >= images.length) {
        currentIndex = 0
    }
    imageElement.src = images[currentIndex]
})