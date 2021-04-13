/**
 * ARRAY OF QUIZZES
 */
const quizzes = require('./quizzes.json');

/**
 * FIND ALL QUIZZES
 * @return all quizzes
 */
const findAllQuizzes = () => {
  return quizzes;
}

/**
 * FIND QUIZ BY ID
 * @return quiz
 */
const findQuizById = (qid) => {
  return quizzes.find(quiz => quiz._id === qid)
}

const createQuiz = () => {}
const updateQuiz = () => {}
const deleteQuiz = () => {}

module.exports = {
  findAllQuizzes, findQuizById, createQuiz, updateQuiz, deleteQuiz
}