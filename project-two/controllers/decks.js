const Card = require("../models/card");
const Deck = require("../models/deck");

module.exports = {
  create,
  index,
  show,
  update,
  delete: deleteDeck,
};

async function create(req, res) {
  try {
    const deck = await Deck.create(req.body);
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
    const foundCards = await Card.find({})
    .populate('cards'); 
      res.render("decks/show", { deck: foundDeck, cardSearch: null, cards: foundCards }); 
  } catch (err) {
    res.status(404);
  }
}

async function update(req, res) {
  try {
    const updateDeck = await Deck.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    console.log('THE UPDATE: ', req.body)
    res.redirect(`/decks/${deck._id}`);
  } catch (err) {
    res.status(404).json(err);
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
