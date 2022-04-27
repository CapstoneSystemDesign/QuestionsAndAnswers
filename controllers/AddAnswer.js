const { Answers } = require('../models/model-index');

module.exports = async function (question_id, body, name, email, photos, res) {

  try {
    const { id: lastAnswerId } = await Answers.findOne({}).sort('-id').select('id -_id');

    console.log('ewsdfgih', lastAnswerId+1)
     await Answers.create([{
      id: lastAnswerId + 1,
      question_id: question_id,
      body: body,
      answerer_email: email,
      answerer_name: name,
      photos: photos,
      date_written: 1595884714409,
    }])
    res.send();
  } catch (err) {
    console.log('something went down in AddAnswer.js: ', err.message);
    res.send(err.message);
  }
}