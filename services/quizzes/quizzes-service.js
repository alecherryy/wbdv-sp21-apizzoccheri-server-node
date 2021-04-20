const quizzesDao = require('../../daos/quizzes-dao')

/**
 * FIND ALL QUIZZES
 * @return all quizzes
 */
const findAllQuizzes = () => {
  return quizzesDao.findAllQuizzes();
}

/**
 * FIND QUIZ BY ID
 * @return quiz
 */
const findQuizById = (qid) => {
  return quizzesDao.findQuizById(qid);
}

const createQuiz = () => {}
const updateQuiz = () => {}
const deleteQuiz = () => {}

module.exports = {
  findAllQuizzes, findQuizById
}