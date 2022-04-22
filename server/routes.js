var router = require('express').Router();
const controller = require('../controllers/controller-index');
const { ListQuestions } = require('../controllers/controller-index.js');


/* === Routes === */
//this is the home route
router.get("/", (req, res)=>{
  console.log('home route entered. This goes nowhere for QA');
});

//gets questions given product id //RESUME HERE. NEED TO GET OUT REQ.BODY
router.get("/qa/questions", (req, res)=>{
  console.log('ListQuestions entered');
  const product_id = parseInt(req.query.product_id);
  ListQuestions(product_id, res);
});

// gets answers given questions
router.get("/qa/questions/:question_id/answers", (req, res)=>{
  console.log('/qa/questions');
});

//adds a question given product id
router.post("/qa/questions... product id", (req, res)=>{
  console.log('/qa/questions');
});

//adds an answer
router.post("/qa/questions... product id", (req, res)=>{
  console.log('/qa/questions');
});

//marks question as helpful
router.put("/qa/questions... product id", (req, res)=>{
  console.log('/qa/questions');
});

//reports a question
router.put("/qa/questions... product id", (req, res)=>{
  console.log('/qa/questions');
});

//marks answer as helpful
router.put("/qa/questions... product id", (req, res)=>{
  console.log('/qa/questions');
});

//reports an answer
//marks answer as helpful
router.put("/qa/questions... product id", (req, res)=>{
  console.log('/qa/questions');
});


module.exports = router;