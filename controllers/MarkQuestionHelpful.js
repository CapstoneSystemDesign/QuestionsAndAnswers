const { Questions } = require('../models/model-index');

module.exports = async function (question_id, res) {
  // console.log('typeof',  product_id);
  console.log('Marking Question As helpfullll!');

  let filter = {question_id, question_id};

  Questions.findOne(filter, function(err, userDoc) {
    if(err) {
      console.log('something went wrong in MarkQuestionHelpful: ', err.message);
      res.send(err);
    } else if(!userDoc) {
      console.log('No questions with matching ID found');
      res.send('invalid question_id');
    } else {
      userDoc.question_helpfullness ++;
      console.log('now saving');
      userDoc.save(function (err) {
        if (err) {
          console.log('something went wrong whild saving question helpfullness');
          res.send(500);
        } else {
          res.send();
        }
      })
    }
  })

  // try {
  //   let doc = await Questions.findOne(filter);
  //   await Questions.updateOne(filter, {question_helpfullness: 5})
  //   // let markQuestionStatus = await Questions.findOneAndUpdate({'question_id': question_id}, {'question_helpfullness': 3});
  //   await doc.save();
  //   // console.log(markQuestionStatus);
  //   // res.send(markQuestionStatus);
  //   res.send();
  //  } catch(err) {
  //   console.log('something went wrong in markQuestionStatus: ', err);
  //   res.send(err.message)
  // }
}