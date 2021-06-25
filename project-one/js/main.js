/*---- constants ----*/
const lookUp = ['apple', 'cherry', 'coin', 'diamond', 'grape', 'heart', 'orange', 'seven']

const slotSymbols = {
    apple: {
        imgUrl: 'imgs/apple.png'
    },
    cherry: {
        imgUrl: 'imgs/cherry.png'
    },
    coin: {
        imgUrl: 'imgs/coin.png'
    },
    diamond: {
        imgUrl: 'imgs/diamond.png'
    },
    grape: {
        imgUrl: 'imgs/grape.png'     
    },
    heart: {
        imgUrl: 'imgs/heart.png'
    },
    insertCoin: {
        imgUrl: 'imgs/coinslot.png'
    },
    orange: {
        imgUrl: 'imgs/orange.png'       
    },
    seven: {
        imgUrl: 'imgs/seven.png'
    },
    spinning: {
        imgUrl: 'imgs/spinning.png'
    }
}

let score, result

const startBtn = document.querySelector('#startHere')
const playBtn = document.querySelector('#playBtn')
const stopBtn = document.querySelector('#stopBtn')
const gameSlotOne = document.querySelector('#slot1')
const gameSlotTwo = document.querySelector('#slot2')
const gameSlotThree = document.querySelector('#slot3')
const StopBtn = document.querySelector('#stopButton')
const scoreBoard = document.querySelector('#score')
const alert = document.querySelector('#alerts')

document.querySelector('#play').addEventListener('click', playGame)

startBtn.addEventListener('click', initialize)
playBtn.addEventListener('click', playGame)
stopBtn.addEventListener('click', stopSpinning)

function initialize() {
    score = {
        player: 10
    }
    result = {
        gameSlotOne: 'insertCoin',
        gameSlotTwo: 'insertCoin',
        gameSlotThree: 'insertCoin'
    }
    startBtn.disabled = true
    playBtn.disabled = false
    stopBtn.disabled = true
    render()
}

function playGame() {
    score.player-- 
    playBtn.disabled = true
    stopBtn.disabled = false
    result = {
        gameSlotOne: 'spinning',
        gameSlotTwo: 'spinning',
        gameSlotThree: 'spinning'
    }
    render()  
}

function getRandomIdx() {
    return Math.floor(Math.random() * 8)
}

function stopSpinning() {
    result.gameSlotOne = lookUp[getRandomIdx()]
    result.gameSlotTwo = lookUp[getRandomIdx()]
    result.gameSlotThree = lookUp[getRandomIdx()]
    render()
    checkSlots()
} 

function checkSlots() {
    stopBtn.disabled = true
    if (result.gameSlotOne === result.gameSlotTwo && result.gameSlotOne === result.gameSlotThree) {
        score.player += 50
        alert.innerText = 'Big winner!'
        playBtn.disabled = false
    } else if (score.player < '1') {
        alert.innerText = 'Good game!'
        startBtn.disabled = false
    } else {
        playBtn.disabled = false
    }
}

function render() {
    scoreBoard.textContent = score.player
    gameSlotOne.style.backgroundImage = `url(${slotSymbols[result.gameSlotOne].imgUrl})`
    gameSlotTwo.style.backgroundImage = `url(${slotSymbols[result.gameSlotTwo].imgUrl})`
    gameSlotThree.style.backgroundImage = `url(${slotSymbols[result.gameSlotThree].imgUrl})`
    alert.innerText = ''
}

