const express = require('express');
const router = express.Router();
const cardsCtrl = require('../controllers/cards');


// router.post('/find', cardsCtrl.findCard)
router.get('/', cardsCtrl.randomCard)
router.post('/new', cardsCtrl.addCard)

module.exports = router;