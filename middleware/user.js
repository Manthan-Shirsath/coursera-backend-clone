const jwt = require("jsonwebtoken")
const {USER_JWT_SECRET} = process.env;
const userMiddleware = (req , res , next) => {
  const token = req.header.token;
  const decoded =jwt.verify(token, USER_JWT_SECRET);

  if (decoded){
    req.user = decoded.id
    next();
  }else{
    res.status(401).send("Unauthorized")
  }


}

module.export = {
  userMiddleware : userMiddleware

}