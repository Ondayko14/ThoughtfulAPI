const { Schema, model } = require('mongoose');

const ThoughtsSchema = new Schema({
    thoughtBody: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now 
    },
    createdBy: {
        type: String,
        required: true
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