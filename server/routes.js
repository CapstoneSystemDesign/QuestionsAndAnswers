var router = require('express').Router();
const controller = require('../controllers/controller-index'); // remember to check these names in the index
const {
  ListQuestions,
  ListAnswers,
  AddQuestion,
  AddAnswer,
  MarkQuestionHelpful,
  ReportQuestion,
  MarkAnswerHelpful,
  ReportAnswer,
} = require('../controllers/controller-index.js');


/* === Routes === */
//this is the home route
router.get("/", (req, res) => {
  console.log('home route entered. This goes nowhere for QA');
});

//ListQuestions: gets questions&answers given product id
router.get("/qa/questions", (req, res) => {
  const product_id = parseInt(req.query.product_id);
  const page = req.query.page ? parseInt(req.query.page) : 1;
  const count = req.query.count ? parseInt(req.query.count) : 5;
  ListQuestions(product_id, page, count, res);
});

// AnswersList: gets answers given questions
router.get("/qa/questions/:question_id/answers", (req, res) => {
  console.log('/qa/questions');
  const page = req.query.page ? parseInt(req.query.page) : 1;
  const count = req.query.count ? parseInt(req.query.count) : 5;
  const question_id = req.params.question_id;
  ListAnswers(question_id, page, count, res);
});

//AddQuestion: adds a question given product id (not complete)
router.put("/qa/questions/:product_id", (req, res) => {
  console.log('/qa/questions');
  res.send();// DELETE THIS
});

//AddAnswer: adds an answer (not complete)
router.post("/qa/questions... product id", (req, res) => {
  console.log('/qa/questions');
  res.send(); // DELETE THIS
});

//MarkQuestionHelpful: marks question as helpful
router.put("/qa/questions/:question_id/helpful", (req, res) => {
  console.log('Mark Question helpful router entered');
  const question_id = req.params.question_id;
  console.log('QUESTIF ID', question_id);

  MarkQuestionHelpful(question_id, res);
});

//ReportQuestion: reports a question
router.put("/qa/questions/:question_id/report", (req, res) => {
  console.log('Report Question router entered');
  const question_id = req.params.question_id;
  console.log('QUESTION ID', question_id);

  ReportQuestion(question_id, res);

  res.send();// DELETE THIS
});

//MarkAnswerHelpful: marks answer as helpful
router.put("/qa/answers/:answer_id/helpful", (req, res) => {
  console.log('Mark Answer helpful router entered');
  const answer_id = req.params.answer_id;
  console.log('ANSWER ID', answer_id);

  MarkAnswerHelpful(answer_id, res);
  res.send();// DELETE THIS
});

//ReportAnswer: reports an answer
router.put("/qa/answers/:answer_id/report", (req, res) => {
  console.log('Report Answer router entered');
  const answer_id = req.params.answer_id;
  console.log('ANSWER ID', answer_id);

  ReportAnswer(answer_id, res);
  res.send();// DELETE THIS
});


module.exports = router;