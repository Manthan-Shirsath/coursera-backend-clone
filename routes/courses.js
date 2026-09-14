const {Router} = require('express');
const coursesRouter = Router();

coursesRouter.get('/purchase', (req, res) => {
    res.send("purchase page");
});

coursesRouter.get('/view all the courses', (req, res) => {
    res.send("view all the courses page");
});

module.exports = {
    coursesRouter: coursesRouter
}