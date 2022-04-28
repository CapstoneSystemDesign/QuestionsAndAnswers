const mongoose = require('mongoose');

const questionsSchema = new mongoose.Schema({
  product_id: {
    type: Number,
    index: true,
    required: true,
  },
  id: {
    type: Number,
    index: true,
  },
  question_id: {
    type: Number,
    index: true,
    required: true,
  },
  reported: {
    type: Boolean,
    index: true,
    default: true,
  },
  question_body: {
    type: String,
    required: false,
    max: 500,
  },
  question_date: Number,
  asker_name: {
    type: String,
    default: 'anonymous',
  },
  asker_email: {
    type: String,
    default: 'anonymous',
  },
  question_helpfulness: {
    type: Number,
    default: 0,
  },
},{toJSON: {virtuals: true}});

questionsSchema.index({ product_id: 1, question_id: 1, reported: 1 }, {name: 'product_id_1_question_id_1_reported_1'});

questionsSchema.virtual('answers', {
  ref: 'answers_with_photos1',
  localField: 'question_id',
  foreignField: 'question_id',
}).get((answers) => {
  const returnedResponse = {};
  answers.forEach((answer) => {
    returnedResponse[answer.id] = answer;
  });
  return returnedResponse;
})

//verification stuff
//ensures indexes are created
const Questions = mongoose.model('questions', questionsSchema);
Questions.ensureIndexes((err)=>{
  if(err) {
    console.log('ensureIndexes', err);
  }
});

Questions.on('index', (err)=>{
  if (err) {
    console.log('index creation: ', err);
  }
})

module.exports = Questions;
