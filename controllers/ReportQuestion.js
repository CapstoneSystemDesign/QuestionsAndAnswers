const { Questions } = require('../models');

module.exports = async function (question_id, res) {

  let filter = {question_id, question_id};

  Questions.findOne(filter, function(err, userDoc) {
    if(err) {
      console.log('something went wrong while reporting question: ', err.message);
      res.send(err);
    } else if(!userDoc) {
      console.log('No questions with matching ID found');
      res.send('invalid question_id');
    } else {
      userDoc.reported = true;
      userDoc.save(function (err) {
        if (err) {
          console.log('something went wrong while reporting question');
          res.send(500);
        } else {
          res.send();
        }
      })
    }
  })
}