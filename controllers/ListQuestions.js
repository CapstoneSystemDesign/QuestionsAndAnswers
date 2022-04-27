const { Questions, Answers } = require('../models/model-index');

module.exports = async function (product_id, page, count, res) {
  // console.log('typeof',  product_id);
  console.log('Searching Questions');

  try {
    let questions = await Questions.find({product_id: product_id, reported: false}).select('-_id -reported -product_id').populate('answers');
    // console.log(questions[0].answers);
    res.send({product_id: product_id, results: questions});
   } catch(err) {
    console.log('something went wrong in ListQuestions: ', err);
    res.send(err.message)
  }
}
