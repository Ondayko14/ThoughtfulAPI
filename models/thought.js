const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    thoughtText: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now 
    },
    userName: {
        type: String
    },
    reactions: {
        reactionResponse: [],
    }
})