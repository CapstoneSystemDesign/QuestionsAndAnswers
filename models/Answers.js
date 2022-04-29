const mongoose = require('mongoose');

const answersSchema = new mongoose.Schema({

  question_id: {
    type: Number,
    index: true,
    required: [true, 'please provide question_id'],
  },
  id: {
    type: Number,
    index: true,
    required: true,
  },
  reported: {
    type: Boolean,
    index: true,
    default: false,
  },
  body: {
    type: String,
    required: true,
    max: 500,
  },
  date_written: {
    type: Number,
    required: true,
  },
  answerer_name: {
    type: String,
    default: 'anonymous',
    max: 20,
  },
  asker_email: {
    type: String,
    default: 'anonymous',
  },
  helpfulness: {
    type: Number,
    default: 0,
  },
  photos: {
    type: Array,
    default: [],
  },
});
answersSchema.index({ question_id: 1, id: 1, reported: 1 });

module.exports = mongoose.model('answers_with_photos1', answersSchema);
