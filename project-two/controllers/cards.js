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
//   console.log("THE CARD NAME: ", cardName)
  const options = {
      url: `${rootURL}cards/named?fuzzy=${cardName}`,
    };
    // console.log("THE URL: ", options)
  request(options, function (err, response, body) {
    // console.log("THE BODY: ", body)
    const cardSearch = JSON.parse(body);
    // console.log("THE BODY: ", cardSearch)
    // options.url = cardSearch.name;

    request(options, function (err, response, body) {
      // console.log("THE BODY AGAIN: ", cardSearch)
      // Line below is the issue with the "redirect", need to render decks/new
      // as current it redirects to /cards/new
      res.render("decks/new", { cardSearch });
    });
  });
}

function randomCard(req, res) {
  const options = {
    url: `${rootURL}cards/random/?q=in%3Aleg`,
  };
  request(options, function (err, response, body) {
    const cardData = JSON.parse(body);
    // console.log(cardData);
    // options.url = cardData.name;

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
      // WHAT DOES card.save actually do?
      // Needs to Deck.cards.push
      card.save(function (err) {
            if (err) return res.render("decks/new");
            res.redirect('decks/new');
        });
    } catch (err) {
        res.status(404);
    }
}