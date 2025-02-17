// prettier-ignore
const { getAllUsers, getUserById, createUser, updateUserById, deleteUserById } = require('../controllers/usersController');
const Router = require('express');

const userRouters = new Router();

userRouters.route('/').get(getAllUsers).post(createUser);
userRouters
  .route('/:id')
  .get(getUserById)
  .patch(updateUserById)
  .delete(deleteUserById);

module.exports = userRouters;
