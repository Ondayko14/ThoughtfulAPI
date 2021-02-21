const { Reaction, Thought } = require('../models');

const friendController = {
    //add a Reaction
    addReaction({params, body}, res) {
      console.log(body);
        Reaction.create(body)
        .then(({_id}) => {
            return Thought.findOneAndUpdate(
                {_id: params.userId},
                {$push: {friends: _id} },
                {new: true}
            );
        })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({message: "No user by that ID!"})
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.json(err));
    },

    //remove a Reaction
    removeFriend({ params }, res) {
        Reaction.findOneAndDelete({ _id: params.friendId })
          .then(deletedFriend => {
            if (!deletedFriend) {
              return res.status(404).json({ message: 'No Reaction with this id!' });
            }
            return User.findOneAndUpdate(
              { _id: params.userId },
              { $pull: { friends: params.friendId } },
              { new: true }
            );
          })
          .then(dbUserData => {
            if (!dbUserData) {
              res.status(404).json({ message: 'No user found with this id!' });
              return;
            }
            res.json(dbUserData);
          })
          .catch(err => res.json(err));
    }
};

module.exports = friendController;