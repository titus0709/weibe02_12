const mongoose = require("mongoose");

const designSchema = new mongoose.Schema({
  designUrl: {
    type: String,
    required: true,
    unique: true,
  },
  category: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("design", designSchema);
