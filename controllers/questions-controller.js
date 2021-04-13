const questionService = require('../services/questions/questions-service')

/**
 * Define controller for questions
 *
 * @param {func} app controller for the quiz
 */
module.exports = (app) => {

  const findAllQuestions = (req, res) => {
    res.send(questionService.findAllQuestions())
  }

  const findQuestionsByQuiz = (req, res) => {
    const quizId = req.params['quizId']
    res.json(questionService.findQuestionsByQuiz(quizId))
  }

  app.get('/api/questions', findAllQuestions)
  app.get('/api/quizzes/:quizId/questions', findQuestionsByQuiz)
}

