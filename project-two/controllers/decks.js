const Card = require("../models/card");
const Deck = require("../models/deck");

const rootURL = "https://api.scryfall.com/";

module.exports = {
  // newDeck,
  create,
  index,
  show,
  update,
  delete: deleteDeck,
};

// function newDeck(req, res) {
//     res.render('decks/new', {
//         cardSearch: null,
//     })    
// }

async function create(req, res) {
  try {
    const deck = new Deck(req.body);
    console.log('NEW DECK: ', deck)
    deck.save(function() {
      res.redirect(`decks/show`);
    });
  } catch (err) {
    res.status(404);
  }
}

async function index(req, res) {
  try {
    const foundDecks = await Deck.find({});
    // console.log('FOUND DECKS: ', foundDecks)
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
    const foundCards = await Card.findById(req.params.id)
    // console.log('THE CARDS: ', foundCards)
    .populate('Card') 
      // console.log('THE CARDS AGAIN: ', foundCards)
      res.render("decks/show", { deck: foundDeck, cards: foundCards }); 
  } catch (err) {
    res.status(404);
  }
}
function update(req, res) {

}

async function deleteDeck(req, res) {
  try {
    await Deck.findByIdAndDelete(req.params.id)
    res.redirect('/decks');
  } catch (err) {
    res.status(404);
  }
}