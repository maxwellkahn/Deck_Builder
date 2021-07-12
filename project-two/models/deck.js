const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deckSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    cards: [ 
        // define a subdocuments either a list of objects or a list of card schema
    ],
})

module.exports = mongoose.model('Deck', deckSchema)