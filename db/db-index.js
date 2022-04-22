const mongoose = require('mongoose');

var url = 'mongodb://localhost:27017/Senior-Design-Capstone';

mongoose.connect(url, () => {
  console.log('Database connected!')
}, e => console.log('error: ',e))

