const express = require('express');
const router = express.Router();
const request = require('request');

const rootURL = 'https://api.scryfall.com/';

router.get('/', function(req, res, next) {
  const cardName = req.query.cardname;
  if(!cardName) {
    return res.render('index', { cardData: null });
  }
  const options = {
    url: `${rootURL}cards/named?fuzzy=${cardName}`
  }
  request(options, function(err, response, body) {
    const cardData = JSON.parse(body);
    // console.log(cardData)
    options.url = cardData.name;

    request(options, function (err, response, body) {
      console.log(cardData.name);
      res.render('index', {cardData});
    });
  });
});

module.exports = router;
