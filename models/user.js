const { Schema, model } = require('mongoose');

const ThoughtfulUserSchema = new Schema({
    userName: {
        type: String
    },
    email: {
        type: String
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends : {
        selfRef: []
    }
},
{
    toJSON: {
        virtuals: true,
    },
    id: false
});

ThoughtfulUserSchema.virtual('thoughtCount').get(function() {
    return this.thoughts.length;
});

const User = model('User', ThoughtfulUserSchema);

module.exports = User;