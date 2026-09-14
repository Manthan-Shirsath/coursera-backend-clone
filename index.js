const express= require('express');
const app= express();
const {userRouter} = require('./routes/user');
const {coursesRouter} = require('./routes/courses');
const {adminRouter} = require('./routes/admin');

app.use('/user',userRouter);
app.use('/courses',coursesRouter);
app.use('/admin',adminRouter);

app.listen(3000,()=>{
    console.log("server is running on port 3000");
});
