const { Schema, model } = require('mongoose');

const ThoughtfulUserSchema = new Schema({
    userName: {
        type: String
    },
    email: {
        type: String
    },
    thoughts: {
        thoughtModel: []
    },
    friends : {
        selfRef: []
    }
});

const User = model('User', ThoughtfulUserSchema);

module.exports = User;