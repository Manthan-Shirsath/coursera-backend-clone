const express= require('express');
const mongoose= require('mongoose');
const app= express();
const {userRouter} = require('./routes/user');
const {coursesRouter} = require('./routes/courses');
const {adminRouter} = require('./routes/admin');
const dotenv = require('dotenv');
dotenv.config();
app.use(express.json());

app.use('/user',userRouter);
app.use('/courses',coursesRouter);
app.use('/admin',adminRouter);

async function main(){
    await mongoose.connect(process.env.MONGO_URI)
    app.listen(3000,()=>{
        console.log("server is running on port 3000");
    });
}
main();

