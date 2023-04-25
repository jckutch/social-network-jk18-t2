const router = require('express').Router();
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId')
.get(getUserById)
.put(updateUser)
.delete(deleteUser);

router.route('/:userID/friends/:friendID').post(addFriend)
.delete(deleteFriend);

module.exports = router;
