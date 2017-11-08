const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema ({
  title : { type: String, required: true },
  question : {type: String, required: true},
  author : {type: Schema.ObjectId, ref: 'Users'},
  like : [{type: Schema.ObjectId, ref: 'Users'}],
  dislike : [{type: Schema.ObjectId, ref: 'Users'}],
  createdAt : { type: Date, default: Date.now },
  updatedAt : { type: Date, default: Date.now }
})

const Question = mongoose.model('Questions', questionSchema)

module.exports = Question;