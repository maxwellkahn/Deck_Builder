const request = require("request");
const Card = require("../models/card");
const Deck = require("../models/deck")

const rootURL = "https://api.scryfall.com/";

module.exports = {
  // findCard,
  randomCard,
  addCard,
};

// function findCard(req, res) {
//   const cardName = req.body.card;
//   const options = {
//       url: `${rootURL}cards/named?fuzzy=${cardName}`,
//     };
//   request(options, function (err, response, body) {
//     const cardSearch = JSON.parse(body);
//     request(options, function (err, response, body) {
//       res.render("decks/show", { cardSearch });
//     });
//   });
// }

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
      const card = await Card.create(req.body);
      console.log("NEW BODY: ", card)
      // Needs to Deck.cards.push
        res.redirect(`decks/${deck._id}`);
    } catch (err) {
        res.status(404);
    }
}