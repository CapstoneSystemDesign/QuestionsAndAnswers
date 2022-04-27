const { Answers } = require('../models/model-index');

module.exports = async function (answer_id, res) {

  let filter = {id: answer_id};

  Answers.findOne(filter, function(err, userDoc) {
    if(err) {
      console.log('something went wrong while reporting answer: ', err.message);
      res.send(err);
    } else if(!userDoc) {
      console.log('No answers with matching ID found');
      res.send('invalid answer_id');
    } else {
      userDoc.reported = false;
      console.log('now saving');
      userDoc.save(function (err) {
        if (err) {
          console.log('something went wrong while reporting answer');
          res.send(500);
        } else {
          res.send();
        }
      })
    }
  })
}