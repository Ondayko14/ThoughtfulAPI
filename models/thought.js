const { Schema, model } = require('mongoose');

const ThoughtsSchema = new Schema({
    thoughtBody: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now 
    },
    createdBy: {
        type: String
    },
    reactions: {
        reactionResponse: [],
    }
});

const Thought = model('Thought', ThoughtsSchema);

module.exports = Thought