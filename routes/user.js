const {Router} = require('express');
const {UserModel} = require('../db');

const userRouter = Router();

userRouter.get('/login', (req, res) => {
    res.send("login page");
});

userRouter.get('/signup', (req, res) => {
    res.send("signup page");
});

module.exports = {
    userRouter: userRouter
}