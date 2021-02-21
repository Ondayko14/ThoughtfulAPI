const router = require('express').Router();
const { addThought, removeThought, getThoughts, getThoughtById } = require('../../controllers/thought-controller');

router.route('/:userId').post(addThought);

router.route('/:userId/:thoughtId').delete(removeThought);

router.route('/').get(getThoughts);

router.route('/:id').get(getThoughtById);

module.exports = router;