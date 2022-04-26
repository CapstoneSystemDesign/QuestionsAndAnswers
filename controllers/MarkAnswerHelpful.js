const { Answers } = require('../models/model-index');

module.exports = async function (answer_id, res) {
  // console.log('typeof',  product_id);
  console.log('Marking Answer As helpful');

  try {
    let markAnswerStatus = await Answers.findOneAndUpdate({id: answer_id}, {helpfullness: this.helpfullness+1});
    console.log(markAnswerStatus);
    res.send(markAnswerStatus);
   } catch(err) {
    console.log('something went wrong in markAnswerStatus: ', err);
    res.send(err.message)
  }

  //this needs refactoring because it's copy and paste
  // Answers.find({question_id: 6879306, id: 3518963, reported: false}).explain()
  // .then((result)=>{
  //   console.log(result);
  //   res.send(result);
  // })
}