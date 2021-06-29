const express = require('express');
const path = require('path');
const namesDb = require('./data/names');

const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function (req, res) {
    res.redirect('/home');
});

app.get('/home', function(req, res) {
    res.render('home');
})

app.get('/names', function(req, res) {
    res.render('names/index', {
        names: namesDb.getAll()
    });
});



app.listen(3000, function() {
    console.log('Listening on port 3000')
})