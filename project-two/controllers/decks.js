const Card = require("../models/card");
const Deck = require("../models/deck");

const rootURL = "https://api.scryfall.com/";

module.exports = {
  new: newDeck,
  create,
  index,
  show,
  delete: deleteDeck,
  searchCards,
};

function newDeck(req, res) {
    res.render('decks/new', {
        cardSearch: null,
    })    
}

async function create(req, res) {
  try {
    const deck = new Deck(req.body);
    deck.save(function (err) {
      if (err) return res.render("decks/new");
      res.redirect("decks/index");
    });
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
    const foundDeck = await Deck.findById(req.params.id);
    const foundCards = await Card.find({ deck: req.params.id });
    res.render("decks/show", { deck: foundDeck, cards: foundCards });
  } catch (err) {
    res.status(404);
  }
}

function deleteDeck(req, res) {
  Deck.deleteOne(req.params.id)
  res.redirect('/decks')
}

async function searchCards(req, res) {
 
  }
