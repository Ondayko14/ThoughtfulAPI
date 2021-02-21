const { Reaction, Thought } = require('../models');

const reactionController = {
    //add a Reaction
    addReaction({params, body}, res) {
      console.log(body);
        Reaction.create(body)
        .then(({_id}) => {
            return Thought.findOneAndUpdate(
                {_id: params.thoughtId},
                {$push: {reactions: _id} },
                {new: true}
            );
        })
        .then(dbThoughtsData => {
            if (!dbThoughtsData) {
                res.status(404).json({message: "No Thoughts by that ID!"})
                return;
            }
            res.json(dbThoughtsData);
        })
        .catch(err => res.json(err));
    },

    //remove a Reaction
    removeReaction({ params }, res) {
        Reaction.findOneAndDelete({ _id: params.reactionId })
          .then(deletedReaction => {
            if (!deletedReaction) {
              return res.status(404).json({ message: 'No Reaction with this id!' });
            }
            return Thought.findOneAndUpdate(
              { _id: params.thoughtId },
              { $pull: { friends: params.reactionId } },
              { new: true }
            );
          })
          .then(dbReactionData => {
            if (!dbReactionData) {
              res.status(404).json({ message: 'No reaction found with this id!' });
              return;
            }
            res.json(dbReactionData);
          })
          .catch(err => res.json(err));
    }
};

module.exports = reactionController;