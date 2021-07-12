const express = require('express');
const router = express.Router();
const decksCtrl = require('../controllers/decks');


/* GET users listing. */
router.get('/', decksCtrl.index);
router.get('/:id', decksCtrl.show);
router.post('/', decksCtrl.create);

module.exports = router;
