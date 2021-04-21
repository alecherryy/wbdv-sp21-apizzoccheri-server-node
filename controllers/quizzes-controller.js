const quizzesService = require('../services/quizzes/quizzes-service')

/**
 * Define controller for quizzes
 *
 * @param {func} app controller for the quiz
 */
module.exports = function (app) {
  app.get('/api/quizzes', (req, res) =>
    quizzesService.findAllQuizzes()
      .then(allQuizzes => res.json(allQuizzes)))
  app.get('/api/quizzes/:qid', (req, res) =>
    quizzesService.findQuizById(req.params['qid'])
      .then(quiz => res.json(quiz)))
}
