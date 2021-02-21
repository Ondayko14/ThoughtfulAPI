const router = require('express').Router();
const { addThought, removeThought, getThoughts } = require('../../controllers/thought-controller');

router.route('/:userId').post(addThought);

router.route('/:userId/:thoughtId').delete(removeThought);

router.route('/').get(getThoughts);


module.exports = router;