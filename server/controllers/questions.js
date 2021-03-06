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
    console.log('params ', req.params)
    console.log('body ', req.body);
    Question.findByIdAndUpdate(req.params.id, {
      $set: {
        title: req.body.title,
        question: req.body.question
      }
    }, {new: true})
    .populate('author')
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
        like: req.headers.id
      },
      $pull: {
        dislike: req.headers.id
      }
    }, {new: true})
    .then(response => {
      res.status(200).send(response)
    })
    .catch(err => {
      res.status(500).send(err)
    })
  }

  static downVote (req, res) {
    Question.findByIdAndUpdate(req.params.id, {
      $addToSet: {
        dislike: req.headers.id
      },
      $pull: {
        like: req.headers.id
      }
    }, {new: true})
    .then(response => {
      res.status(200).send(response)
    })
    .catch(err => {
      res.status(500).send(err)
    })
  }
}

module.exports = Quest;