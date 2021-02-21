const router = require('express').Router();
const { addThought, removeThought, getThoughts, getThoughtById, updateThought } = require('../../controllers/thought-controller');

router.route('/:userId').post(addThought);

router.route('/:userId/:thoughtId').delete(removeThought);

router.route('/').get(getThoughts);

router.route('/:id').get(getThoughtById);

router.route('/:id').put(updateThought);
module.exports = router;