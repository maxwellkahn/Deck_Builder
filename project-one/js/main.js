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

/*---- cached element references ----*/

/*---- event listeners ----*/
//needs an event listener for 3 buttons for the 3 slot positions
//needs an event listenter for the start button
//needs an event listener for the play button



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