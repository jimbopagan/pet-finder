var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
var pet = require('./routes/pet-route.js');

//mongoose
mongoose.connect('mongodb://localhost/pet-finder', function () {
    console.log('mongoose is loose')
});

//middleware
app.use(bodyParser.json());

app.use('/pets', pet);

app.use(express.static('public'));

app.listen(3000, function () {
    console.log('port 3000')
})
