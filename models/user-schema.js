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
    email: String,
    phone: Number,
    county: String,
    pets: {
        kind: {
            type: String,
            enum: ['dog', 'cat', 'bird']
        },
        gender: {
            type: String,
            enum: ['male', 'female']
        },
        photo: String,
        missingSince: {
            type: Date,
            default: Date.now
        }
    }
});



module.exports = mongoose.model("User", userSchema);
