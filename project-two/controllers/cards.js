const request = require("request");
const Card = require("../models/card");
const Deck = require("../models/deck")

const rootURL = "https://api.scryfall.com/";

module.exports = {
  findCard,
  randomCard,
  addCard,
};

function findCard(req, res) {
  const cardName = req.body.card;
  const options = {
      url: `${rootURL}cards/named?fuzzy=${cardName}`,
    };
  request(options, function (err, response, body) {
    const cardSearch = JSON.parse(body);
    request(options, function (err, response, body) {
      res.render("decks/show", { cardSearch });
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
      console.log(cardData.name);
      res.render('index', { cardData });
    });
  });
}

async function addCard(req, res) {
    try {
      const card = new Card(req.body);
      console.log("NEW BODY: ", card)
      // Needs to Deck.cards.push
      card.save(function (err) {
            if (err) return res.render("decks/new");
            res.redirect('decks/new');
        });
    } catch (err) {
        res.status(404);
    }
}