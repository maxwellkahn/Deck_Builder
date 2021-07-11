const express = require('express');
const router = express.Router();
const decksCtrl = require('../controllers/decks');

/* GET users listing. */
router.get('/', decksCtrl.index);
router.post('/', decksCtrl.create)

module.exports = router;
