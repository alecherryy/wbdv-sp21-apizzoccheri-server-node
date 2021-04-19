const questionsModel = require('../models/questions/questions-model')

/**
 * FIND ALL QUESTIONS
 */
const findAllQuestions = () => {
  return questionsModel.find();
};

/**
 * FIND QUESTION BY ID
 */
const findQuestionById = (questionId) => {
  return questionsModel.find({
    _id: questionId
  });
};

/**
 * FIND QUESTION BY QUIZ
 */
const findQuestionsForQuiz = (quizId) => {
  return questionsModel.find({ qid });
}

module.exports = {
  findAllQuestions, findQuestionById, findQuestionsForQuiz
}