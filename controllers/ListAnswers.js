const { Answers } = require('../models');

module.exports = async function (question_id, page, count, res) {

  try {
    let answers = await Answers.find({question_id: question_id, reported: false}).select(['-_id', '-reported']);
    console.log(answers);
    res.send(answers);
   } catch(err) {
    console.log('something went wrong in ListAnswers: ', err);
    res.send(err.message)
  }

}