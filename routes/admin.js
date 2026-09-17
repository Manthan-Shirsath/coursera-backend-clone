const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { z } = require('zod');
const {Router}= require('express');
const {AdminModel}= require('../db');
const adminRouter= Router();

adminRouter.post('/login',async (req,res)=>{
    const {email, password} = req.body;
    const hashPassword = bcrypt.hashSync(password, 10);
    const user = await AdminModel.findOne({email: email });
    if(!user){

        return res.status(404).send("User not found");
    }
    const isMatch = bcrypt.compareSync(password, user.password);
    if(!isMatch){
        return res.status(401).send("Invalid credentials");
    }
    const token = jwt.sign({email: email}, process.env.ADMIN_JWT_SECRET);
    res.json({token: token});

});

adminRouter.post('/signup',async(req,res)=>{
    const {email, password, firstName, lastName} = req.body;
    const hashPassword = bcrypt.hashSync(password, 10);
    const user = new AdminModel({
        email: email,
        password: hashPassword,
        firstName: firstName,
        lastName: lastName
    });
    await user.save();
    res.status(201).send("Admin created");
});

adminRouter.post('/course',adminMiddleware,async (req,res)=>{
    const adminid = req.adminid;
    const {title, description, price, imageLink, published} = req.body;
    const course = new CourseModel({
        title: title,
        description: description,
        price: price,
        imageLink: imageLink,
        createrid: adminid
    });
    await course.save();
    res.status(201).send("Course created");

});

module.exports={
    adminRouter: adminRouter
}