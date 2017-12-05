const Question = require('../models/questions');

class Quest {

  static createQuestion (req, res) {
    Question.create({
      title: req.body.title,
      question: req.body.question,
      author: req.headers.id,
      like : [],
      dislike : []
    })
    .then(newQuestion => {
      let response = {
        message : 'New question has been added!',
        newQuestion
      }
      console.log('lolos kagak ?');
      res.status(200).send(response)
    })
    .catch(err => {
      console.log('masuk error nih?');
      res.status(500).send(err)
    })
  }

  static getOneQuestion (req, res) {
    Question.findById(req.params.id)
    .populate('author')
    .then(question => {
      console.log('sukses ambil gak? ')
      res.status(200).send(question)
    })
    .catch(err => {
      res.status(500).send(err)
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
        res.status(500).send(err)
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
      res.status(500).send(err)
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
      res.status(500).send(err1)
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
      res.status(500).json(err)
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
      res.status(500).send(err)
    })
  }
}

module.exports = Quest;