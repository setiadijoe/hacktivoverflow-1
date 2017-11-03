var express = require('express');
var router = express.Router();
const Questions = require('../controllers/questions');

router.post('/addquestion', Questions.createQuestion)

router.get('/', Questions.viewQuestion)

router.put('/:id', Questions.updateQuestion)

router.delete('/:id', Questions.deleteQuestion)

router.post('/:id/upvote', Questions.upVote)

module.exports = router;