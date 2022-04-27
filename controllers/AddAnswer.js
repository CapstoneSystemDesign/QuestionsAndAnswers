const { Answers } = require('../models/model-index');

module.exports = async function (answer_id, res) {

  console.log('Add Answer entered');

  // console.log('Marking Answer As helpful ', answer_id );
  // let filter = {id: answer_id};

  // Answers.findOne(filter, function(err, userDoc) {
  //   if(err) {
  //     console.log('something went wrong in MarkAnswerHelpful: ', err.message);
  //     res.send(err);
  //   } else if(!userDoc) {
  //     console.log('No answers with matching ID found');
  //     res.send('invalid answer_id');
  //   } else {
  //     userDoc.helpfulness ++;
  //     console.log('now saving');
  //     userDoc.save(function (err) {
  //       if (err) {
  //         console.log('something went wrong whild saving answer helpfullness');
  //         res.send(500);
  //       } else {
  //         res.send();
  //       }
  //     })
  //   }
  // })
}