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
let score, result, state

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
//needs an event listener for 3 buttons for the 3 slot positions
//these only come up after 'playGame' function is currently running
// document.querySelector('#stop1').addEventListener('click', stopSpinning)
// document.querySelector('#stop2').addEventListener('click', stopSpinning)
// document.querySelector('#stop3').addEventListener('click', stopSpinning)

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
    
    startBtn.removeEventListener('click', initialize)
    playBtn.addEventListener('click', playGame)
    render()
}

// removed in favor of .removeEventListener()
// function deleteStart() {
//     // deletes start button, can only be renabled when score goes below 0 (if score > 0)
//     startBtn.parentNode.removeChild(startBtn)
// }

// function makePlayBtn() {
//     // creates play button to enable game start
//     let playBtnEl = document.createElement('button');
//     playBtnEl.textContent = 'Play';
//     playBtnEl.setAttribute('id', 'playBtn');
//     gameButtons.appendChild(playBtnEl);
//     playBtn.addEventListener('click', playGame)
// }

// removed in favor of .removeEventListener()
// function deletePlayBtn(){
//     // removes play button so it cannot be repetedly pressed
//     let playBtn = document.querySelector('#playBtn')
//     playBtnEl.parentNode.removeChild(playBtn)
// }

function playGame() {
    //sets slot state to 'spinning' & allows stop buttons to be pressed
    let playBtn = document.querySelector('#playBtn');
    playBtn.removeEventListener('click', playGame);
    score.player--; 
    stopBtn.addEventListener('click', stopSpinning)
    // let gameBtnEl = document.createElement('button');
    // gameBtnEl.textContent = 'Stop';
    // gameBtnEl.setAttribute('id', 'stopButton');
    // gameButtons.appendChild(gameBtnEl)
    // stopBtn.addEventListener('click', stopSpinning)
    render()
// need to create THREE stop buttons

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


// function removeBtn() {
//     let el = document.getElementById('buttons');
//     buttons.parentNode.removeChild()
// }

function checkSlots() {
    //to see if any points are awarded
    stopButton.removeEventListener('click', stopSpinning)
    if (result.gameSlotOne === result.gameSlotTwo && result.gameSlotOne === result.gameslotThree) {
        score.player += 50
    } else alert('try again!');
    playBtn.addEventListener('click', playGame)
}

function render() {
    //whenever game state is changed to render app state
    scoreBoard.textContent = score.player

    // gameSlotOne.style.backgroundImage = `url(${slotSymbols[result.slotOne].imgUrl})`
    // gameSlotTwo.style.backgroundImage = `url(${slotSymbols[result.slotTwo].imgUrl})`
    // gameSlotThree.style.backgroundImage = `url(${slotSymbols[result.slotThree].imgUrl})`
}

