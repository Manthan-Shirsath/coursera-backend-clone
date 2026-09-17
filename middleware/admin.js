const jwt = require("jsonwebtoken")
const {ADMIN_JWT_SECRET} = process.env;
const adminMiddleware = (req , res , next) => {
  const token = req.header.token;
  const decoded =jwt.verify(token, ADMIN_JWT_SECRET);

  if (decoded){
    req.admin = decoded.id
    next();
  }else{
    res.status(401).send("Unauthorized")
  }


}

module.exports = {
  adminMiddleware : adminMiddleware

}