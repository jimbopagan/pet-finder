var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
var pet = require('./routes/pet-route');
var config = require("./config");
var expressJwt = require("express-jwt");
var path =require("path");


//mongoose
mongoose.connect(config.database, function () {
    console.log('mongoose is loose')
});

//middleware
app.use(bodyParser.json());

app.use("/api", expressJwt({secret: config.secret}));

app.use('/api', pet);

app.use("/auth/change-password", expressJwt({secret: config.secret}));

app.use("/auth", require("./routes/authRoutes"));

app.use(express.static(path.join(__dirname, "public")));

app.listen(3000, function () {
    console.log('port 3000')
})
