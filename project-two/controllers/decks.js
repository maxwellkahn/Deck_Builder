const Card = require('../models/card')
const Deck = require('../models/deck')

module.exports = {
    new: newCard,
    create,
    index,
    show,
}

async function newCard(req, res) {

}

async function create(req, res) {

}

async function index(req, res) {
    const foundDecks = await Deck.find();
    res.render('index.ejs', {
        decks: foundDecks,
    });
}

async function show(req, res) {

}