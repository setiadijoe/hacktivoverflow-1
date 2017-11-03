var express = require('express');
var router = express.Router();
const Answer = require('../controllers/answers');

router.post('/', Answer.postAnswer)

router.get('/', Answer.viewAnswer)

router.delete('/:id', Answer.deleteAnswer)

module.exports = router;