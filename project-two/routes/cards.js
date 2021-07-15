const express = require('express');
const router = express.Router();
const cardsCtrl = require('../controllers/cards');

router.get('/', cardsCtrl.randomCard)
router.get('/cards/search', cardsCtrl.searchCard)
router.post('/cards/search', cardsCtrl.findCard)
router.post('/cards', cardsCtrl.addCard)
router.post('/decks/:id/cards', cardsCtrl.addToDeck);

module.exports = router;