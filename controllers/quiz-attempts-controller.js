const quizAttemptDao = require('../daos/quiz-attempts-dao')

module.exports = (app) => {
  /**
   * CREATE ATTEMPT
   */
  const createAttempt = (req, res) => {
    quizAttemptDao.createAttempt(
      req.params['qid'],
      req.body
    ).then(attempt => res.send(attempt))
  }

  /**
   * FIND ATTEMPTS FOR QUIZ
   */
  const findAttemptsForQuiz = (req, res) => {
    quizAttemptDao.findAttemptsForQuiz(
      req.params['qid']
    ).then(attempts => res.send(attempts))
  }

  /**
   * FIND BEST ATTEMPT FOR QUIZ
   */
  const getBestAttemptForQuiz = (req, res) => {
    quizAttemptDao.getBestAttemptForQuiz(
      req.params['qid']
    ).then(attempt => res.send(attempt))
  }

  app.post("/api/quizzes/:qid/attempts", createAttempt)
  app.get("/api/quizzes/:qid/attempts", findAttemptsForQuiz)
  app.get("/api/quizzes/:qid/best", getBestAttemptForQuiz)
}