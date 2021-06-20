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

    }
}
/*---- app's state (variables) ----*/
let score, result, state

/*---- cached element references ----*/
const gameSlotOne = document.querySelector('#slot1')
const gameSlotTwo = document.querySelector('#slot2')
const gameslotThree = document.querySelector('#slot3')

const stopBtnOne = document.querySelector('#stop1')
const stopBtnTwo = document.querySelector('#stop2')
const stopBtnThree = document.querySelector('#stop3')

const startBtn = document.querySelector('#start-btn')
const playBtn = document.querySelector('#play-btn')

/*---- event listeners ----*/
//needs an event listener for 3 buttons for the 3 slot positions
document.querySelector('#stop1').addEventListener('click', slotOne)
document.querySelector('#stop2').addEventListener('click', slotT
document.querySelector('#stop3').addEventListener('click', slotThree)
//needs an event listenter for the start button
document.querySelector('#start-here').addEventListener('click', startGame)
//needs an event listener for the play button
document.querySelector('#play').addEventListener('click', playGame)


/*---- functions ----*/
function initialize() {
    //what I need to start the game
}

function getRandomIdx() {
    return Math.floor(Math.random() * 8)
    //used to generate a number that will corespond with slot symbols
}

function checkSlots() {
    //to see if any points are awarded
}

function render() {
    //whenever game state is changed to render our app state
}