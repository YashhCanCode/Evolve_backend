const mongoose = require("mongoose");

const problemSchema = new mongoose.Schema({
  title: String,
  domain: String,
  description: String,
  background: String,
  existingSolutions: [String],
  limitations: [String],
  category: String,
  source: {
    type: String,
    default: "User", // "Gemini" if auto-generated
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Problem", problemSchema);