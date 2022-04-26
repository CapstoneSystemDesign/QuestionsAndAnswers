const mongoose = require('mongoose');
const { Answers } = require('./model-index');

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
  helpful: Number,
});

questionsSchema.index({ product_id: 1, question_id: 1, reported: 1 });

questionsSchema.virtual('answers', {
  ref: 'Answers',
  localField: 'question_id',
  foreignField: 'question_id',
  justOne: true,
})

module.exports = mongoose.model('questions', questionsSchema);