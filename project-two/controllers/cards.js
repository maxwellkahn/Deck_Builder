const request = require("request");
const Card = require("../models/card");

const rootURL = "https://api.scryfall.com/";

module.exports = {
  findCard,
  randomCard,
};

function findCard(req, res) {
  const cardName = req.query.cardname;
  const options = {
    url: `${rootURL}cards/named?fuzzy=${cardName}`,
  };
  request(options, function (err, response, body) {
    const cardData = JSON.parse(body);
    console.log(cardData);
    options.url = cardData.name;

    request(options, function (err, response, body) {
      // console.log(cardData.name);
      res.render("decks/new", { cardData });
    });
  });
}

function randomCard(req, res) {
  const randomCard = req.query;
  const options = {
    urel: `${rootURL}cards/random/?q=in%3Aleg`,
  };
  request(options, function (err, response, body) {
    const cardData = JSON.parse(body);
    console.log(cardData);
    options.url = cardData.name;

    request(options, function (err, response, body) {
      console.log(cardData.name);
      res.render("index", { cardData });
    });
  });
}
