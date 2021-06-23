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
const gameslotThree = document.querySelector('#slot3')

// these will be used when they are created by the 'playGame' function
const StopBtn = document.querySelector('#stopButton')
// const stopBtnOne = document.querySelector('#stop1')
// const stopBtnTwo = document.querySelector('#stop2')
// const stopBtnThree = document.querySelector('#stop3')

const scoreBoard = document.querySelector('#score')

/*---- event listeners ----*/
//needs an event listenter for the start button
startBtn.addEventListener('click', initialize)
// document.querySelector('#stop1').addEventListener('click', stopSpinning)
// document.querySelector('#stop2').addEventListener('click', stopSpinning)
// document.querySelector('#stop3').addEventListener('click', stopSpinning)

//needs an event listener for the play button
document.querySelector('#play').addEventListener('click', playGame)


/*---- functions ----*/
function initialize() {
    //what I need to start the game
    score = {
        player: 20
    }
    
    result = {
        slotOne: 'insertCoin',
        slotTwo: 'insertCoin',
        slotThree: 'insertCoin'
    }
    
    startBtn.removeEventListener('click', initialize)
    playBtn.addEventListener('click', playGame)
    render()
}

function playGame() {
    //sets starts game, turns on the stop button
    playBtn.removeEventListener('click', playGame);
    score.player-- 
    stopBtn.addEventListener('click', stopSpinning)
    // need to create THREE stop buttons
    
    render()
    // gameSlotOne.style.backgroundImage = `url(${slotSymbols[spinning.slotOne].imgUrl})`
    // gameSlotTwo.style.backgroundImage = `url(${slotSymbols[spinning.slotTwo].imgUrl})`
    // gameslotThree.style.backgroundImage = `url(${slotSymbols[spinning.slotThree].imgUrl})`
}

function getRandomIdx() {
    return Math.floor(Math.random() * 8)
    //used to generate a number that will corespond with slot symbols
}

function stopSpinning() {
    result.gameSlotOne = lookUp[getRandomIdx()]
    result.gameSlotTwo = lookUp[getRandomIdx()]
    result.gameslotThree = lookUp[getRandomIdx()]
    render()
    console.log(result.gameSlotOne, result.gameSlotTwo, result.gameslotThree)
    checkSlots()
} 

function checkSlots() {
    //to see if any points are awarded
    stopBtn.removeEventListener('click', stopSpinning)
    if (result.gameSlotOne === result.gameSlotTwo && result.gameSlotOne === result.gameslotThree) {
        score.player += 50
        alert('big winner!')
        render()
        playGame()
    } else if (score.player < '1'){
        alert('good game!')
        // playBtn.removeEventListener('click', playGame)
        // stopBtn.removeEventListener('click', stopSpinning)
        startBtn.addEventListener('click', initialize)
    } else {
        // alert('try again!');
    playGame()
    }
}

function render() {
    //whenever game state is changed to render app state
    scoreBoard.textContent = score.player

    // gameSlotOne.style.backgroundImage = `url(${slotSymbols[result.slotOne].imgUrl})`
    // gameSlotTwo.style.backgroundImage = `url(${slotSymbols[result.slotTwo].imgUrl})`
    // gameSlotThree.style.backgroundImage = `url(${slotSymbols[result.slotThree].imgUrl})`
}

