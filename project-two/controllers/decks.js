const Card = require("../models/card");
const Deck = require("../models/deck");

const rootURL = "https://api.scryfall.com/";

module.exports = {
  findCard,
  create,
  index,
  show,
  update,
  delete: deleteDeck,
};

async function create(req, res) {
  try {
    const deck = await Deck.create(req.body);
      // console.log('THE DECK:', deck)
      res.redirect(`decks/${deck._id}`);
  } catch (err) {
    res.status(404);
  }
}

async function index(req, res) {
  try {
    const foundDecks = await Deck.find({});
    res.render("decks/index", {
      decks: foundDecks,
    });
  } catch (err) {
    res.status(404);
  }
}

async function show(req, res) {
  try {
    const foundDeck = await Deck.findById(req.params.id)
    .populate('cards'); 
      console.log('found deck: ', foundDeck)
      console.log('req.params.id ', req.params.id)
      res.render("decks/show", { deck: foundDeck, cardSearch: null, }); 
  } catch (err) {
    res.status(404);
  }
}

async function update(req, res) {
  try {
    deck.findByIdAndUpdate(req.params.body)
    res.redirect('decks')
  } catch (err) {
    res.status(404);
  }
}

async function deleteDeck(req, res) {
  try {
    await Deck.findByIdAndDelete(req.params.id)
    res.redirect('/decks');
  } catch (err) {
    res.status(404);
  }
}

async function findCard(req, res) {
  try{
  const foundDeck = await Deck.findById(req.params.id)
  const cardName = req.body.card;
  const options = {
      url: `${rootURL}cards/named?fuzzy=${cardName}`,
    };
  request(options, function (err, response, body) {
    const cardSearch = JSON.parse(body);
    // request(options, function (err, response, body) {
      res.render("decks/show", { cardSearch, deck: foundDeck});
    });
  } catch (err) {
    res.send(404);
  }
}