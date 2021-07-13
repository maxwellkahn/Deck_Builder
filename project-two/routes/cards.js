const express = require('express');
const router = express.Router();
const cardsCtrl = require('../controllers/cards');


router.post('/new', cardsCtrl.findCard)
router.get('/', cardsCtrl.randomCard)

module.exports = router;