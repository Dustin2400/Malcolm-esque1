const mongoose = require('mongoose');

mongoose.connect(
  "mongodb+srv://dustin2400:Themistokles8@cluster0.gozfq.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
    // family: 4
  }
);

module.exports = mongoose.connection;