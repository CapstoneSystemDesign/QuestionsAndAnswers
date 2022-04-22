const { Answers } = require('../models/model-index');

module.exports = function (product_id, res) {
  // console.log('typeof',  product_id);
  Answers.findOne({ id: product_id }, (err, answer) => {
    if (err) {
      console.log('failed in controllers getQuestions.js');

    } else {
      console.log('the goods', answer);
      res.send(answer);
    }
  });
}