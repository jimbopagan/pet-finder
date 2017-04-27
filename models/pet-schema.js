var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var petSchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId, 
        ref: 'User'
    },
    
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
    },
    county: String
    
})
module.exports = mongoose.model('Pet', petSchema);
