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
  },
  reported: {
    type: Boolean,
    index: true,
  },
  body: String,
  date_written: Number,
  asker_name: String,
  asker_email: String,
  helpfulness: Number,
  photos: Array,
});
answersSchema.index({question_id: 1, id: 1, reported: 1});

module.exports = mongoose.model('answers_with_photos1', answersSchema);
