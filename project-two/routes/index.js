const express = require('express');
const router = express.Router();
const cardsCtrl = require('../controllers/cards');

router.get('/', cardsCtrl.randomCard)




module.exports = router;
