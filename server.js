var express = require('express');
var bodyParser = require('body-parser');
var mongoose = requrie('mongoose');
var app =express();

//mongoose
//mongoose.connect('mongodb://localhost/pet-finder', funciton(){
//                 console.log('mongoose is loose')
//                 });

//middleware
//app.use(bodyParser.json());
//
//app.use('/pets', pet);
//
//app.use(express.static('public'));

app.listen(3000, function(){
           console.log('port 3000')
           })