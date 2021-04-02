const mongoose = require('mongoose');

module.exports = mongoose.connect('mongodb://localhost/my-game', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
