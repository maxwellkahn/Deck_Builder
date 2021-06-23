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
/*---- app's state (variables) ----*/
let score, result

/*---- cached element references ----*/
const startBtn = document.querySelector('#startHere')

// const gameButtons = document.querySelector('#buttons')
const playBtn = document.querySelector('#playBtn')
const stopBtn = document.querySelector('#stopBtn')

const gameSlotOne = document.querySelector('#slot1')
const gameSlotTwo = document.querySelector('#slot2')
const gameSlotThree = document.querySelector('#slot3')

const StopBtn = document.querySelector('#stopButton')

const scoreBoard = document.querySelector('#score')

/*---- event listeners ----*/
//needs an event listenter for the start button
startBtn.addEventListener('click', initialize)

//needs an event listener for the play button
document.querySelector('#play').addEventListener('click', playGame)


/*---- functions ----*/
function initialize() {
    //what I need to start the game
    score = {
        player: 20
    }
    
    
    result = {
        gameSlotOne: 'insertCoin',
        gameSlotTwo: 'insertCoin',
        gameSlotThree: 'insertCoin'
    }
    startBtn.disabled = true
    playBtn.addEventListener('click', playGame)
    playBtn.disabled = false
    render()
}

function playGame() {
    //sets starts game, turns on the stop button
    playBtn.disabled = true
    score.player-- 
    stopBtn.addEventListener('click', stopSpinning)
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
    
    console.log(result.gameSlotOne, result.gameSlotTwo, result.gameSlotThree)
    checkSlots()
} 

function checkSlots() {
    //to see if any points are awarded
    stopBtn.removeEventListener('click', stopSpinning)
    if (result.gameSlotOne === result.gameSlotTwo && result.gameSlotOne === result.gameslotThree) {
        score.player += 50
        alert('big winner!')
        playBtn.disabled = false
    } else if (score.player < '1'){
        alert('good game!')
        startBtn.disabled = false
    } else {
        // alert('try again!');
        playBtn.disabled = false
    }
}

function render() {
    //whenever game state is changed to render app state
    scoreBoard.textContent = score.player

    gameSlotOne.style.backgroundImage = `url(${slotSymbols[result.gameSlotOne].imgUrl})`
    gameSlotTwo.style.backgroundImage = `url(${slotSymbols[result.gameSlotTwo].imgUrl})`
    gameSlotThree.style.backgroundImage = `url(${slotSymbols[result.gameSlotThree].imgUrl})`
}

