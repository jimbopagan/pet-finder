var mongoose = require('mongoose');  
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({  
    
    name: String,
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    emailAddress: [String],
    pets:[petSchema]
});



module.exports = mongoose.model("User", userSchema);  