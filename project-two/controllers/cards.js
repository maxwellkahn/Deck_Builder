const request = require("request");
const Card = require("../models/card");
const Deck = require("../models/deck")

const rootURL = "https://api.scryfall.com/";

module.exports = {
  addToDeck,
  searchCard,
  findCard,
  randomCard,
  addCard,
};

async function searchCard(req, res) {
  try {
    const cards = await Card.find({});
    res.render('cards/search', {
      cardSearch: null,
    })
  } catch(err) {
    res.status(404);
  }
}

function findCard(req, res) {
  const cardName = req.body.card;
  const options = {
      url: `${rootURL}cards/named?fuzzy=${cardName}`,
    };
  request(options, function (err, response, body) {
    const cardSearch = JSON.parse(body);
    request(options, function (err, response, body) {
      res.render("cards/search", { cardSearch });
    });
  });
}

function randomCard(req, res) {
  const options = {
    url: `${rootURL}cards/random/?q=in%3Aleg`,
  };
  request(options, function (err, response, body) {
    const cardData = JSON.parse(body);
    request(options, function (err, response, body) {
      res.render('index', { cardData });
    });
  });
}

async function addCard(req, res) {
    try {
      const card = await Card.create(req.body);
      console.log(card.image_uri)
        res.redirect(`cards/search`);
    } catch (err) {
        res.status(404);
    }
}

function addToDeck(req, res) {
  Deck.findById(req.params.id, function(err, deck) {
    deck.cards.push(req.body.cardId);
    deck.save(function (err) {
      res.redirect(`/decks/${deck._id}`)
    })
  })
}