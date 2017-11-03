const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const answerSchema = new Schema ({
  question : { type: Schema.ObjectId, ref: 'Questions' },
  answer : { type: String, required: true },
  user : { type: Schema.ObjectId, ref: 'Users' },
  like: [{ type: Schema.ObjectId, ref: 'Users', unique: true }],
  dislike: [{ type: Schema.ObjectId, ref: 'Users', unique: true }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
})

const Answer = mongoose.model('Answers', answerSchema)

module.exports = Answer;