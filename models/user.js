const { Schema, model } = require('mongoose');

const ThoughtfulUserSchema = new Schema({
    userName: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends : [
        {
            type: Schema.Types.ObjectId,
            ref: 'Friend'
        }
    ],
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
ThoughtfulUserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

const User = model('User', ThoughtfulUserSchema);

module.exports = User;