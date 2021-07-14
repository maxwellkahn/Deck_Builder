const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deckSchema = new Schema({
    deckName: {
        type: String,
        required: true,
        default: 'new deck'
    },
    deckAuthor: {
        type: String,
        required: true,
        default: 'none provided',
    },
    cards: [
        // define a subdocuments either a list of objects or a list of card schema
    ],
})

module.exports = mongoose.model('Deck', deckSchema)