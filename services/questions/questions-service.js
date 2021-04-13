const questions = require('./questions.json')

/**
 * FIND ALL QUESTIONS
 *
 */
const findAllQuestions = () => {
  return questions
}

/**
 * FIND ALL QUESTIONS FOR A GIVEN QUIZ
 *
 */
const findQuestionsByQuiz = (quizId) => {
  return questions.filter(question => question.quizId === quizId)
}

const findQuestionById = (questionId) => {
  return questions.find(question => question._id === questionId)
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