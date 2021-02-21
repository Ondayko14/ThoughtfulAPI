const router = require('express').Router();
const { addFriend, removeFriend } = require('../../controllers/friend-controller');

router.route('/:userId').post(addFriend);

router.route('/:userId/:friendId').delete(removeFriend);

module.exports = router;