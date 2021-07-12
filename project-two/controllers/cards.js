const request = require('request');
const Card = require("../models/card");

const rootURL = 'https://api.scryfall.com/';

modules.export = {
    searchCard,
    randomCard,
};

function searchCard(req, res) {
    const cardName = req.query.cardname;
    const options = {
        url: `${rootURL}cards/named?fuzzy=${cardName}`
    };
    request(options, function(err, response, body) {
        const cardData = JSON.parse(body);
        console.log(cardData)
        options.url = cardData.name;

        request(options, function (err, response, body) {
            // console.log(cardData.name);
            res.render('decks/new' {cardData});
        });
    });
}