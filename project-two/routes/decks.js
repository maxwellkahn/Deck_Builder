const express = require('express');
const router = express.Router();
const deckCtrl = require('../controllers/decks');

/* GET users listing. */
router.get('/', deckCtrl.index);

module.exports = router;
