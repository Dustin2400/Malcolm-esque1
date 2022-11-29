const mongoose = require('mongoose');
const URI = 'mongodb+srv://dustin2400:Pericles8@cluster0.gozfq.mongodb.net/malcolm-esque?retryWrites=true&w=majority'

mongoose.connect(
  process.env.MONGODB_URI || URI ,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
    // family: 4
  }
);

module.exports = mongoose.connection;