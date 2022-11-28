const mongoose = require('mongoose');
const URI = 'mongodb+srv://dustin2400:Pericles8@cluster0.gozfq.mongodb.net/malcolm-esque?retryWrites=true&w=majority'

mongoose.connect(
  "mongodb+srv://david60:Pericles8@cluster0.gozfq.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // family: 4
  }
);

module.exports = mongoose.connection;