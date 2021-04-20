const mongoose = require('mongoose');

// create schema
const questionsSchema = mongoose.Schema({
  _id: String,
  title: String,
  question: String,
  correct: String,
  answer: String,
  type: {
      type: String,
      enum: ['TRUE_FALSE', 'MULTIPLE_CHOICE', 'FILL_BLANKS']
  },
  choices: [String]
}, {collection: 'questions'})

module.exports = questionsSchema