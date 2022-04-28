const { Questions, Answers } = require('../models/model-index');

module.exports = async function (product_id, page, count, res) {
  try {
    let questions = await Questions.find({product_id: product_id, reported: false}).select('-_id -reported -product_id').populate('answers', '-_id -reported');

    res.send({product_id: product_id.toString(), results: questions});
    console.log('questions', questions);
   } catch(err) {
    console.log('something went wrong in ListQuestions: ', err);
    res.send(err.message)
  }
}
