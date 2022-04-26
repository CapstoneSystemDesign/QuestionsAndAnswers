const { Questions, Answers } = require('../models/model-index');

module.exports = async function (product_id, page, count, res) {
  // console.log('typeof',  product_id);
  console.log('Searching Questions');

  try {
    let questions = await Questions.find({product_id: product_id, reported: false}).select(['-_id','-product_id']);
    console.log(questions);
    res.send(questions);
   } catch(err) {
    console.log('something went wrong in ListQuestions: ', err);
    res.send(err.message)
  }

  // Questions.find({question_id: 6879306, id: 3518963, reported: false}).explain()
  // .then((result)=>{
  //   console.log(result);
  //   res.send(result);
  // })
}
