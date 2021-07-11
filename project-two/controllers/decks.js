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

function create(req, res) {
    const deck = new Deck(req.body);
    deck.save(function(err) {
        if (err) return res.render('decks/new');
        res.redirect('decks/index');
    })

}

async function index(req, res) {
    const foundDecks = await Deck.find();
    res.render('index.ejs', {
        decks: foundDecks,
    });
}

async function show(req, res) {
    const foundDeck = await Deck.findById(req.params.id)
    const foundCards = await Card.find({deck: req.params.id})
    res.render('decks/show', {deck: foundDeck, cards: foundCards})
}