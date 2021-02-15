const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    reactionId: {

    },
    reactionBody: {
        type: String,
    },
    userName: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})