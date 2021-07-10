const { name } = require('ejs');
const express = require('express');
const router = express.Router();
const request = require('request');

// const rootURL = 'https://api.scryfall.com/';
const rootURL = 'https://api.scryfall.com/cards/random/?q=in%3Aleg'

/* GET home page. */
router.get('/', function(req, res, next) {
  const cardData = req.query.body;
  request(
    `${rootURL}`,
    function(err, response, body) {
      res.render('index', {cardData: object.name});
    }
  );
  // console.log('cardname: ', req.query.cardName)
});

module.exports = router;
