var mongoose = require('mongoose');  
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({  
    
    name: String,
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    emailAddress: [String],
    admin: {
        type: Boolean,
        default: false
    },
    pets:[{
        type: Schema.Types.ObjectId, 
        ref: 'Pet'
    }]
});



module.exports = mongoose.model("User", userSchema);  