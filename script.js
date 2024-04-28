let card_game = document.getElementById('card-game')
let imageSrc = [{ src: 'king1.jpg', name: 'king' }, { src: 'queen.png', name: 'queen' }, { src: 'joker.jpg', name: 'joker' }]
let bg = 'bg.png'
let guess = document.getElementById('guess')
let result = document.getElementById('result')
let resultDiv = document.getElementById('result-div')
let list = []
let random = 3
let count = 2

guess.innerHTML = count

for (let i = 1; i <= 3; i++) {
    function randonNum() {
        let num = Math.random() * random
        if (list.indexOf(Math.ceil(num)) === -1) {
            list.push(Math.ceil(num))
        }
        else {
            randonNum()
        }
    }
    randonNum()
}

list.forEach((value, key) => {
    card_game.innerHTML += `
    <div class="card" id=${imageSrc[value - 1].name}>
    <div class="card-front" >
    <img onclick={changePic(event)} src=${bg} alt="" style="width: 100%; height: 170px;"  id= ${value - 1}>
    </div>
    <div class="card-back">
    </div>
    </div>`
})


document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flip');
    });
});

function changePic(event) {
    let toogleImg = event.target.getAttribute("src")
    if (toogleImg === bg) {
        event.target.src = imageSrc[event.target.id].src
    }
    else {
        event.target.src = bg
    }


    if (imageSrc[event.target.id].name == 'king') {
        resultDiv.style.display = 'block'
        result.innerHTML = 'You Win!'
        let images = document.querySelectorAll('img')
        for (let i = 0; i < images.length; i++) {
          images[i].onclick = function(){}
        }
    }
    else {
        count--
        guess.innerHTML = count

        if (count == 0) {
            resultDiv.style.display = 'block'
            result.innerHTML = 'You Lose!'
            let images = document.querySelectorAll('img')
            for (let i = 0; i < images.length; i++) {
              images[i].onclick = function(){}
            }
        }
    }
}

function tryAgain(){
    window.location.reload()
}