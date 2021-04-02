const mongoose = require('mongoose');

const cardSchema = mongoose.Schema({
  theme: String,
  questions: Array,
});

module.exports = mongoose.model('Card', cardSchema);
