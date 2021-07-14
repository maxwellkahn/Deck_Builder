const Card = require("../models/card");
const Deck = require("../models/deck");

const rootURL = "https://api.scryfall.com/";

module.exports = {
  // findCard,
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
    .populate('cards'); 
      // console.log('found deck: ', foundDeck)
      // console.log('req.params.id ', req.params.id)
      res.render("decks/show", { deck: foundDeck, cardSearch: null, }); 
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
    res.redirect('/decks/show', { deck: updateDeck, cardSearch: null,});
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

// async function findCard(req, res) {
//   try{
//   const foundDeck = await Deck.findById(req.params.id)
//   const cardName = req.body.card;
//   console.log('THE NAME: ', cardName)
//   const options = {
//       url: `${rootURL}cards/named?fuzzy=${cardName}`,
//     };
//     console.log('THE API URL: ', options.url)
//   request(options, function (response, body) {
//     const cardSearch = JSON.parse(body);
//     console.log('THE CARD SEARCH ', cardSearch)
//     // request(options, function (err, response, body) {
//       res.render("decks/show", { cardSearch, deck: foundDeck});
//     });
//   } catch (err) {
//     res.sendStatus(404);
//   }
// }

