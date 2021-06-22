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
let score, result, 
//state

/*---- cached element references ----*/
const startBtn = document.querySelector('#start-btn')

const gameButtons = document.querySelector('#buttons')
const gameSlotOne = document.querySelector('#slot1')
const gameSlotTwo = document.querySelector('#slot2')
const gameslotThree = document.querySelector('#slot3')
// these will be used when they are created by the 'playGame' function
const stopBtnOne = document.querySelector('#stop1')
const stopBtnTwo = document.querySelector('#stop2')
const stopBtnThree = document.querySelector('#stop3')

// const playBtn = document.querySelector('#play-btn')
const scoreBoard = document.getElementById('score-board h3')

/*---- event listeners ----*/
//needs an event listener for 3 buttons for the 3 slot positions
// these only come up after 'playGame' function is currently running
document.querySelector('#stop1').addEventListener('click', stopSpinning)
document.querySelector('#stop2').addEventListener('click', stopSpinning)
document.querySelector('#stop3').addEventListener('click', stopSpinning)
//needs an event listenter for the start button
startBtn.addEventListener('click', initialize)
//needs an event listener for the play button
document.querySelector('#play').addEventListener('click', playGame)


/*---- functions ----*/
function initialize() {
    //what I need to start the game
    score = {
        player: 10
    }

    result = {
            slotOne: 'insertCoin',
            slotTwo: 'insertCoin',
            slotThree: 'insertCoin'
    }

    render()
}

function playGame() {
    //sets slot state to 'spinning' & allows stop buttons to be pressed
    score--; 
    gameButtons.parentNode.appendChild('#stop1', '#stop2', '#stop3'),
    gameSlotOne.style.backgroundImage = `url(${slotSymbols[spinning.slotOne].imgUrl})`
    gameSlotTwo.style.backgroundImage = `url(${slotSymbols[spinning.slotTwo].imgUrl})`
    gameslotThree.style.backgroundImage = `url(${slotSymbols[spinning.slotThree].imgUrl})`

}

function getRandomIdx() {
    return Math.floor(Math.random() * 8)
    //used to generate a number that will corespond with slot symbols
}

function stopSpinning() {
    //changes the state of slot from 'spinning' to 'not spinning'
    result.slots = lookUp[getRandomIdx()]
    removeBtn()
    if ('#buttons' === 'stopSpinning') {
        checkSlots()
    } 

}

function removeBtn() {
    let el = document.getElementById('buttons');
    buttons.parentNode.removeChild()
}

function checkSlots() {
    //to see if any points are awarded
}

function render() {
    //whenever game state is changed to render app state
    scoreBoard.textContent = score.player

    gameSlotOne.style.backgroundImage = `url(${slotSymbols[result.slotOne].imgUrl})`
    gameSlotTwo.style.backgroundImage = `url(${slotSymbols[result.slotTwo].imgUrl})`
    gameSlotThree.style.backgroundImage = `url(${slotSymbols[result.slotThree].imgUrl})`
}

