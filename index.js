const express= require('express');
const app= express();

app.get('/login',(req,res)=>{
    res.send("login page");
});

app.get('/signup',(req,res)=>{
    res.send("signup page");
});

app.get('/purchase the course',(req,res)=>{
    res.send("purchase the course page");
});

app.get('/view all the courses',(req,res)=>{
    res.send("view all the courses page");
});

app.get('/view all the purchased courses',(req,res)=>{
    res.send("view all the purchased courses page");
});


app.listen(3000,()=>{
    console.log("server is running on port 3000");
});