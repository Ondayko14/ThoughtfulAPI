const { Schema, model } = require('mongoose');

const ReactionSchema = new Schema({
    createdAt: {
        type: Date,
        default: Date.now,
        required: true
    },
    reactionBody: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280
    },
    userName: {
        type: String,
        required: true
    },
});

const Reaction = model('Reaction', ReactionSchema);

module.exports = Reaction