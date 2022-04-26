const mongoose = require('mongoose');

const answersSchema = new mongoose.Schema({

  question_id: {
    type: Number,
    index: true,
  },
  id: {
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
  helpful: Number,
  photos: Array,
});
answersSchema.index({question_id: 1, id: 1, reported: 1});
// console.log(answersSchema.virtual);
// answersSchema.virtual('questions', {
//   ref: 'questions',
//   localField: 'question_id',
//   foreignField: 'question_id',
// })

module.exports = mongoose.model('answers_with_photos1', answersSchema);
