var express = require('express');
var router = express.Router();
const Answer = require('../controllers/answers');
const Auth = require('../helper/auth')

router.post('/', Auth.hasLogin, Answer.postAnswer)

router.get('/:id', Answer.viewAnswer)

router.delete('/:id', Auth.hasLogin, Answer.deleteAnswer)

module.exports = router;