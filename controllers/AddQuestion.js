const { Questions } = require('../models/model-index');

module.exports = async function (product_id, body, name, email, res) {

  try {
    const { question_id: lastQuestionID } = await Questions.findOne({}).sort('-question_id').select('question_id -_id');
     await Questions.create([{
      product_id: product_id,
      question_id: lastQuestionID + 1,
      question_body: body,
      asker_email: email,
      question_date: 1595884714409
    }])
    res.send();
  } catch (err) {
    console.log('something went down in AddQuestion.js: ', err.message);
    res.send(err.message);
  }
}