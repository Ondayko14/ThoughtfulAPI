const { Schema, model } = require('mongoose');

const ThoughtsSchema = new Schema({
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
});

const Thought = model('Thought', ThoughtsSchema);

module.exports = Thought