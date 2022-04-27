const mongoose = require('mongoose');

const questionsSchema = new mongoose.Schema({
  product_id: {
    type: Number,
    index: true
  },
  question_id: {
    type: Number,
    index: true,
  },
  reported: {
    type: Boolean,
    index: true,
  },
  body: String,
  date_written: Number,
  asker_name: String,
  asker_email: String,
  question_helpfullness: Number,
},{toJSON: {virtuals: true}});

questionsSchema.index({ product_id: 1, question_id: 1, reported: 1 }, {name: 'product_id_1_question_id_1_reported_1'});

questionsSchema.virtual('answers', {
  ref: 'answers_with_photos1',
  localField: 'question_id',
  foreignField: 'question_id',
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