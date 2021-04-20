const quizService = require('../services/quizzes/quizzes-service')

/**
 * Define controller for quizzes
 *
 * @param {func} app controller for the quiz
 */
module.exports = (app) => {

  const findAllQuizzes = (req, res) => {
    res.send(quizService.findAllQuizzes())
  }

  const findQuizById = (req, res) => {
    const qid = req.params['qid']

    res.json(quizService.findQuizById(qid))
  }

  app.get("/api/quizzes", findAllQuizzes)
  app.get("/api/quizzes/:quizId", findQuizById)
}