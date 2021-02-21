const { Schema, model } = require('mongoose');

const ReactionSchema = new Schema({
    createdAt: {
        type: Date,
        default: Date.now 
    },
    reactionBody: {
        type: String
    },
    userName: {
        type: String
    },
});

const Reaction = model('Reaction', ReactionSchema);

module.exports = Reaction