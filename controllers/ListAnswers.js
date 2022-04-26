const { Answers } = require('../models/model-index');

module.exports = async function (question_id, page, count, res) {
  // console.log('typeof',  product_id);
  console.log('Searching Answers');

  try {
    let answers = await Answers.find({question_id: question_id, reported: false}).select(['-_id', '-reported']);
    console.log(answers);
    res.send(answers);
   } catch(err) {
    console.log('something went wrong in ListAnswers: ', err);
    res.send(err.message)
  }

  //this needs refactoring because it's copy and paste
  // Answers.find({question_id: 6879306, id: 3518963, reported: false}).explain()
  // .then((result)=>{
  //   console.log(result);
  //   res.send(result);
  // })
}