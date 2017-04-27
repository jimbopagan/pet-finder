var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
var pet = require('./routes/pet-route.js');
var config = require("./config");
var expressJwt = require("express-jwt");


//mongoose
mongoose.connect(config.database, function () {
    console.log('mongoose is loose')
});

//middleware
app.use(bodyParser.json());

app.use("/api", expressJwt({secret: config.secret}));

app.use('/api/pets', pet);

app.use("/auth", require("./routes/authRoutes"));

app.use(express.static('public'));

app.listen(3000, function () {
    console.log('port 3000')
})
