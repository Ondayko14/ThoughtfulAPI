const {user} = require('../models');
const { db } = require('../models/user');

const userController = {
    //functions
    getAllUsers(req, res) {
        user.find({})
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
        });
    },

    geUserById({params}, res) {
        user.findOne({_id: params.id})
        .then(dbUserData => {
            if(!dbUserData) {
                res.status(404).json({message: 'No user found with that id'});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
    }
}

module.exports = userController;