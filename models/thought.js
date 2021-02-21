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
    reactions : [
        {
            type: Schema.Types.ObjectId,
            ref: 'Reaction'
        }
    ],
},
{
    toJSON: {
        virtuals: true,
    },
    id: false
});

ThoughtsSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('Thought', ThoughtsSchema);

module.exports = Thought