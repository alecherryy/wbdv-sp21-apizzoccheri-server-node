const quizzesModel = require('../models/quizzes/quizzes-model')

/**
 * FIND ALL QUIZZES
 */
const findAllQuizzes = () => {
  return quizzesModel.find();
}

/**
 * FIND QUIZ BY ID
 */
const findQuizById = (qid) => {
  return quizzesModel.findById(qid).populate('questions').exec();
}

module.exports = {
  findAllQuizzes, findQuizById
}