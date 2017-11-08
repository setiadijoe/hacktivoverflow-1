require('dotenv').config()
const jwt = require('jsonwebtoken')
const key = process.env.JWT_SECRET

const hasLogin = (req, res, next) => {
  jwt.verify(req.headers.token, key, (err, decode)=>{
    if (err) {
      console.log('ini ada error :', err);
    } else {
      req.headers = decode
      next()
    }
  })
}

module.exports = {
  hasLogin
}