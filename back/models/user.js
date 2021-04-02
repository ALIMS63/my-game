const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  // Имя пользователя
  name: {
    type: String,
    required: true,
    unique: true,
    minlength: 4,
  },
  // Мы не храним пароль, а только его хэш
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  // Email
  email: {
    type: String,
    required: true,
    minlength: 3,
    match: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  },
  createdAt: {
    type: String,
    default: new Date().toLocaleDateString(),
  },
  score: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model('User', UserSchema);
