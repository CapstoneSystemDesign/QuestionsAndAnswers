const { Answers } = require('../models/model-index');

module.exports = async function (answer_id, res) {
  // console.log('typeof',  product_id);
  console.log('Marking Answer As helpful');
  const filter = {id: answer_id};

  try {
    let doc = Answers.findOne(filter);
    let markAnswerStatus = await Answers.findOneAndUpdate(filter, {helpfullness: this.helpfullness+1});
    doc.save();
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