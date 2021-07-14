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
    cards: [{
        type: Schema.Types.ObjectId, 
        ref:'Card',
    }],
})

module.exports = mongoose.model('Deck', deckSchema)