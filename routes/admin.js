const {Router}= require('express');

const adminRouter= Router();

adminRouter.post('/admin login',(req,res)=>{
    res.send("admin login page");
});

adminRouter.post('/admin signup',(req,res)=>{
    res.send("admin signup page");
});

adminRouter.post('/create a course',(req,res)=>{
    res.send("create a course page");
});

module.exports={
    adminRouter: adminRouter
}