import mongoose from 'mongoose';

export default mongoose.connect('mongodb://localhost/my-game', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
