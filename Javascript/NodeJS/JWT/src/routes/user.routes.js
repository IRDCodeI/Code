const express = require('express');
const userRouter = express.Router()

const userController = require('../controllers/user.controller')

userRouter.post('/login', userController.loginUser)
userRouter.post('/note', userController.createNote)

module.exports = userRouter