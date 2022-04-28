var router = require('express').Router();
const {
  ListQuestions,
  ListAnswers,
  AddQuestion,
  AddAnswer,
  MarkQuestionHelpful,
  ReportQuestion,
  MarkAnswerHelpful,
  ReportAnswer,
} = require('../controllers');


/* === Routes === */
//this is the home route
router.get("/", (req, res) => {
  console.log('home route entered. This goes nowhere for QA');
  res.send('O.o what are you doing here?');
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
  const page = req.query.page ? parseInt(req.query.page) : 1;
  const count = req.query.count ? parseInt(req.query.count) : 5;
  const question_id = req.params.question_id;
  ListAnswers(question_id, page, count, res);
});

//AddQuestion: adds a question given product id
router.post("/qa/questions/", (req, res) => {
  const {product_id, body, name, email} = req.body;
  AddQuestion(product_id, body, name, email, res);
});

//AddAnswer: adds an answer given question id
router.post("/qa/questions/:question_id/answers", (req, res) => {
  const question_id = req.params.question_id;
  const {body, name, email, photos} = req.body;
  AddAnswer(question_id, body, name, email, photos, res);
});

//MarkQuestionHelpful: marks question as helpful
router.put("/qa/questions/:question_id/helpful", (req, res) => {
  const question_id = req.params.question_id;
  MarkQuestionHelpful(question_id, res);
});

//ReportQuestion: reports a question
router.put("/qa/questions/:question_id/report", (req, res) => {
  const question_id = req.params.question_id;
  ReportQuestion(question_id, res);
});

//MarkAnswerHelpful: marks answer as helpful
router.put("/qa/answers/:answer_id/helpful", (req, res) => {
  const answer_id = req.params.answer_id;
  MarkAnswerHelpful(answer_id, res);
});

//ReportAnswer: reports an answer
router.put("/qa/answers/:answer_id/report", (req, res) => {
  const answer_id = req.params.answer_id;
  ReportAnswer(answer_id, res);
});


module.exports = router;