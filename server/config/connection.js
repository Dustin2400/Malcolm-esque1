const mongoose = require('mongoose');

mongoose.connect(
  // process.env.MONGODB_URI,
  // {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  //   useFindAndModify: false
  //   // family: 4
  // }
);

module.exports = mongoose.connection;