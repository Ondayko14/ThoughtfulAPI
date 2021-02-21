const { Schema, model } = require('mongoose');

const FriendSchema = new Schema({
    createdAt: {
        type: Date,
        default: Date.now 
    },
    friendName: {
        type: String
    },
});

const Friend = model('Friend', FriendSchema);

module.exports = Friend