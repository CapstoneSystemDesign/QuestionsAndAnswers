const { Questions } = require('../models/model-index');

module.exports = async function (question_id, res) {
  console.log('Adding Question');

  let filter = {question_id, question_id};

  // Questions.findOne(filter, function(err, userDoc) {
  //   if(err) {
  //     console.log('something went wrong in MarkQuestionHelpful: ', err.message);
  //     res.send(err);
  //   } else if(!userDoc) {
  //     console.log('No questions with matching ID found');
  //     res.send('invalid question_id');
  //   } else {
  //     userDoc.question_helpfullness ++;
  //     console.log('now saving');
  //     userDoc.save(function (err) {
  //       if (err) {
  //         console.log('something went wrong whild saving question helpfullness');
  //         res.send(500);
  //       } else {
  //         res.send();
  //       }
  //     })
  //   }
  // })
}