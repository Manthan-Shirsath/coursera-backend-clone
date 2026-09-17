const {Router} = require('express');
const {UserModel} = require('../db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userRouter = Router();

userRouter.post('/login', async (req, res) => {
    const {email, password} = req.body;
    const user = await UserModel.findOne({email: email});
    if (!user) {
        return res.status(404).send("User not found");
    }
    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) {
        return res.status(401).send("Invalid credentials");
    }
    const token = jwt.sign({email: email}, process.env.USER_JWT_SECRET);
    res.json({token: token});
});

userRouter.post('/signup', async (req, res) => {
    const {email, password, firstName, lastName} = req.body;
    const hashPassword = bcrypt.hashSync(password, 10);
    const user = new UserModel({
        email: email,
        password: hashPassword,
        firstName: firstName,
        lastName: lastName
    });
    await user.save();
    res.status(201).send("User created");
});

module.exports = {
    userRouter: userRouter
}