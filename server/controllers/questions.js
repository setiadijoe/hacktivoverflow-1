const Question = require('../models/questions');

// mengecek sudah ada atau belum akses token di local storage
// kalau udah ada bisa bikin pertanyaan

class Quest {

  static createQuestion (req, res) {
    Question.create({
      title: req.body.title,
      question: req.body.question,
      author: req.headers.name,
      like : [],
      dislike : []
    })
    .then(newQuestion => {
      let response = {
        message : 'New question has been added!',
        newQuestion
      }
      res.status(200).send(response)
    })
    .catch(err => {
      res.status(400).json(err)
    })
  }

  static viewQuestion (req, res) {
    Question.find()
    .populate('author')
    .populate('like')
    .populate('dislike')
      .then(questions => {
        res.status(200).send(questions)
      })
      .catch(err => {
        res.status(400).send(err)
      })
  }

  static updateQuestion (req, res) {
    Question.findByIdAndUpdate(req.params.id, {
      $set : {
        question : req.body.question
      }
    })
    .then(newQuestion => {
      let response = {
        newQuestion,
        message: 'The Question has been updated!'
      }
      res.status(200).send(response)
    })
    .catch(err => {
      res.status(400).send(err)
    })
  }

  static deleteQuestion (req, res) {
    Question.findByIdAndRemove(req.params.id)
    .then(deleteQuestion => {
      let response = {
        deleteQuestion,
        message : 'Question has been deleted!'
      }
      res.send(response).status(200)
    })
    .catch(err => {
      res.status(400).send(err1)
    })
  }

  static upVote (req, res) {
    Question.findByIdAndUpdate(req.params.id, {
      $addToSet: {
        like: req.body.userId
      }
    })
    .then(response => {
      res.status(200).json(response)
    })
    .catch(err => {
      res.status(400).json(err)
    })
  }

  static downVote (req, res) {
    Question.findByIdAndUpdate(req.params.id, {
      $addToSet: {
        dislike: req.body.userId
      }
    })
    .then(response => {
      res.status(200).send(response)
    })
    .catch(err => {
      res.status(400).send(err)
    })
  }
}

module.exports = Quest;