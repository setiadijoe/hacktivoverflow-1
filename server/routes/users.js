var express = require('express');
var router = express.Router();
var User = require('../controllers/users')

router.get('/', User.findAll)

router.post('/login', User.login)

router.post('/register', User.register)

module.exports = router;