var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var petSchema = new Schema({
    owner: String,
    pets: [{
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
}]
})

module.exports = mongoose.model('Pet', petSchema);
