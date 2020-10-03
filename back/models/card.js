import mongoose from "mongoose";

const cardSchema = mongoose.Schema({
  theme: String,
  questions: Array,
});

export default mongoose.model("Card", cardSchema);
