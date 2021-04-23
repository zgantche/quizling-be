const userRouter = require('express').Router();

const userController = require('../controllers/user.controller');

userRouter.get('/all', userController.getUsers);

module.exports = userRouter;