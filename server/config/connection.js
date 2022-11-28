const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb+srv://dustin2400:Pericles8@cluster0.gozfq.mongodb.net/malcolm-esque?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // family: 4
  }
);

module.exports = mongoose.connection;