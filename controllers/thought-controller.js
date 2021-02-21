const { Thought, User } = require('../models');

const thoughtController = {
    //add a thought
    addThought({params, body}, res) {
      console.log(body);
        Thought.create(body)
        .then(({_id}) => {
            return User.findOneAndUpdate(
                {_id: params.userId},
                {$push: {thoughts: _id} },
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

    //remove a thought
    removeThought({ params }, res) {
        Thought.findOneAndDelete({ _id: params.thoughtId })
          .then(deletedThought => {
            if (!deletedThought) {
              return res.status(404).json({ message: 'No thought with this id!' });
            }
            return User.findOneAndUpdate(
              { _id: params.userId },
              { $pull: { thoughts: params.thoughtId } },
              { new: true }
            );
          })
          .then(dbUserData => {
            if (!dbUserData) {
              res.status(404).json({ message: 'No pizza found with this id!' });
              return;
            }
            res.json(dbUserData);
          })
          .catch(err => res.json(err));
    },

    //get all thoughts
    getThoughts(req, res) {
      Thought.find({})
      .populate({
          path: 'thoughts',
          select: '-__v'
      })
      .select('-__v')
      .sort({_id: -1})
      .then(dbThoughtData => res.json(dbThoughtData))
      .catch(err => {
          console.log(err);
          res.status(400).json(err);
      });
  },
};

module.exports = thoughtController;