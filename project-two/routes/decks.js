const express = require('express');
const router = express.Router();
const decksCtrl = require('../controllers/decks');


/* GET users listing. */
router.get('/', decksCtrl.index);
// router.get('/new', () => console.log('New Route'));
router.get('/new', decksCtrl.new);
router.get('/:id', decksCtrl.show);
router.post('/', decksCtrl.create);
router.delete('/:id', decksCtrl.delete);

module.exports = router;
