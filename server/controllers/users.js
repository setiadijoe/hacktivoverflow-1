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
    console.log(req.body);
    let user = new User (req.body)
    user.save()
    .then(saveduser => {
      console.log('ini kalo berhasil disave');
      let jwtToken = { usertoken: saveduser, message: 'New user is coming' }
      res.status(200).send(jwtToken)
    }) 
    .catch(err => {
      console.log('ini beneran gagal');
      res.status(400).send(err)
    })
  }

  static login (req, res) {
    console.log(req.body);
    User.findOne({ username: req.body.username })
      .then(user => {
        console.log('berhasil masuk gak?');
        console.log(user);
        console.log(bcrypt.compareSync(req.body.password, user.password));
        if (bcrypt.compareSync(req.body.password, user.password)) {
          let token = jwt.sign({
            id: user._id,
            name: user.name,
            username: user.username
          }, key)
          console.log('dapet token dong');
          let jwtToken = {usertoken: token, user:user.name, id:user._id, message: 'User is login', status: true}
          res.status(200).send(jwtToken)  
        } else {
          console.log('salah bu salah');
          res.status(400).send('Password salah')
        }
      })
      .catch(err => {
        console.log('belum register ya?');
        res.status(500).send(err)
      })
  }
}

module.exports = USER;