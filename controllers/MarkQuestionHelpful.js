const { Questions } = require('../models/model-index');

module.exports = async function (question_id, res) {
  // console.log('typeof',  product_id);
  console.log('Marking Question As helpfullll!');

  try {
    let markQuestionStatus = await Questions.findOneAndUpdate({'question_id': question_id}, {'question_helpfullness': 3});
    console.log(markQuestionStatus);
    res.send(markQuestionStatus);
   } catch(err) {
    console.log('something went wrong in markQuestionStatus: ', err);
    res.send(err.message)
  }

  //this needs refactoring because it's copy and paste
  // Answers.find({question_id: 6879306, id: 3518963, reported: false}).explain()
  // .then((result)=>{
  //   console.log(result);
  //   res.send(result);
  // })
}