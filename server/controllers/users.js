require('dotenv').config();

const User = require('../models/users');
const jwt = require('jsonwebtoken')
const key = process.env.JWT_SECRET;
const bcrypt = require('bcrypt');

class USER {

  static findAll(req, res) {
    User.find()
      .then(users => {
        res.send(users)
      })
      .catch(err => {
        res.send(err)
      })
  }
  
  static register (req, res) {
    User.findOne({ username: req.body.username })
    .then(user => {
      if (user.username === req.body.username) {
        res.send('Username sudah digunakan')
      } else {
        let user = new User (req.body)
        user.save()
        .then(saveduser => {
          let token = jwt.sign({
            name: saveduser.name,
            username: saveduser.username,
            email: saveduser.email
          }, key)
          let jwtToken = { usertoken: token, message: 'New user is coming' }
          res.status(200).send(jwtToken)
        }) 
      }
    })
    .catch(err => {
      res.send(err)
    })
  }

  static login (req, res) {
    User.findOne({ username: req.body.username })
      .then(user => {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          let token = jwt.sign({
            name : user.name,
            username: user.username,
            email: user.email
          }, key)
          let jwtToken = {usertoken: token, message: 'User is login'}
          res.send(jwtToken)  
        } else {
          res.send('Password salah')
        }
      })
      .catch(err => {
        res.send(err)
      })
  }
}

module.exports = USER;