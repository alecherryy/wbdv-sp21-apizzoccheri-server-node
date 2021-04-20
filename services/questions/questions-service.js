const questionsDao = require('../../daos/questions-dao')

/**
 * FIND ALL QUESTIONS
 *
 */
const findAllQuestions = () => {
  return questionsDao.findAllQuestions();
}

/**
 * FIND ALL QUESTIONS FOR A GIVEN QUIZ
 *
 */
const findQuestionsByQuiz = (quizId) => {
  return questionsDao.findQuestionsForQuiz(quizId);
}

const findQuestionById = (questionId) => {
  return questionsDao.findQuestionById(questionId);
}

const createQuestion = () => {}
const createQuestionForQuiz = () => {}
const updateQuestion = () => {}
const deleteQuestion = () => {}

module.exports = {
  createQuestion,
  createQuestionForQuiz,
  findAllQuestions,
  findQuestionsByQuiz,
  findQuestionById,
  updateQuestion,
  deleteQuestion
}