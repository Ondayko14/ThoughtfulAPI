const { Schema, model } = require('mongoose');
const User = model('User', UserSchema);

const UserSchema = new Schema({
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

module.exports = User;