const quizAttemptsModel = require('../models/quiz-attempts/quiz-attempts-model');

/**
 * GET QUIZ SCORE
 */
const scoreQuiz = (questions) => {
  let numCorrectQuestions = 0;

  questions.forEach(question => question.answer === question.correct ?
    numCorrectQuestions++ :
    numCorrectQuestions
  )

  return 100 * numCorrectQuestions / questions.length;
}

/**
 * SET FIRST QUIZ ATTEMPT
 */
const findAttemptsForQuiz = (qid) => {
  return quizAttemptsModel.find({
    quiz: qid
  }).populate('quiz', 'title _id')
}

/**
 * CREATE QUIZ ATTEMPT
 */
const createAttempt = (qid, attempt) => {
  return quizAttemptsModel.create({
    quiz: qid,
    sys_creation_date: Date.now(),
    answers: attempt,
    score: scoreQuiz(attempt)
  })
}

/**
 * GET BEST QUIZ SCORE
 */
const getBestAttemptForQuiz = (qid) => {
  return quizAttemptsModel.find({
    quiz: qid
  }).sort({
    score: -1
  }).limit(1);
}

module.exports = {
  createAttempt, findAttemptsForQuiz, getBestAttemptForQuiz
}