var express = require('express');
var router = express.Router();
const Questions = require('../controllers/questions');
const Auth = require('../helper/auth')

router.post('/', Auth.hasLogin, Questions.createQuestion)

router.get('/', Questions.viewQuestion)
router.get('/:id', Questions.getOneQuestion)
router.put('/:id', Auth.hasLogin, Questions.updateQuestion)
router.delete('/:id', Auth.hasLogin, Questions.deleteQuestion)

module.exports = router;