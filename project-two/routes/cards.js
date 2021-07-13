const express = require('express');
const router = express.Router();
const request = require('request');
const cardsCtrl = require('../controllers/cards');

const rootURL = 'https://api.scryfall.com/';

router.get('/', cardsCtrl.searchCard)
router.get('/', cardsCtrl.randomCard)