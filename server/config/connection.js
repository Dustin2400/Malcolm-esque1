const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/malcolm-esque',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // family: 4
  }
);

module.exports = mongoose.connection;