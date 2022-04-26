const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');


/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */

const agg = [
  {
    '$lookup': {
      'from': 'answers_photos',
      'localField': 'answer_id',
      'foreignField': 'answer_id',
      'as': 'photos'
    }
  }
];

MongoClient.connect(
  'mongodb://localhost:27017/',
  { useNewUrlParser: true, useUnifiedTopology: true },
  function(connectErr, client) {
    assert.equal(null, connectErr);
    const coll = client.db('System-Design-Capstone').collection('answers');
    coll.aggregate(agg, (cmdErr, result) => {
      assert.equal(null, cmdErr);
    });
    client.close();
  });

// const mongoose = require('mongoose');
// const { AnswersList } = require('../../models/model-index');

// aggregate.lookup({ from: 'AnswersList.answers_photos', localField: 'answer_id', foreignField: 'answer_id', as: 'photos' });

db.answers_photos.createIndex({ answer_id: 1 })
db.answers.createIndex({ id: 1 })
db.answers.aggregate([{ $lookup: { from: 'answers_photos', localField: 'id', foreignField: 'answer_id', as: 'photos' } }, { $out: 'answers_with_photos1' }])