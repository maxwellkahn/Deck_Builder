const Card = require("../models/card");
const Deck = require("../models/deck");

module.exports = {
  new: newDeck,
  create,
  index,
  show,
};

function newDeck(req, res) {
    res.render('decks/new', {
        cardData: null,
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
    res.render("decks/index.ejs", {
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


async function searchCards(req, res) {
    // create variable for serchable cards and set equal to postman query
    // use query from user to match searchable cards
    // render match
}