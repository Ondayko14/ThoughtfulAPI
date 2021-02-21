const { Friend, User } = require('../models');

const friendController = {
    //add a Friend
    addFriend({params, body}, res) {
      console.log(body);
        Friend.create(body)
        .then(({_id}) => {
            return User.findOneAndUpdate(
                {_id: params.userId},
                {$push: {friends: _id} },
                {new: true, runValidators: true}
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

    //remove a Friend
    removeFriend({ params }, res) {
        Friend.findOneAndDelete({ _id: params.friendId })
          .then(deletedFriend => {
            if (!deletedFriend) {
              return res.status(404).json({ message: 'No Friend with this id!' });
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