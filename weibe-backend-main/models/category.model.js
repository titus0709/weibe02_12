const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  categoryName: {
    type: String,
    required: true,
    unique: true,
  },
  noOfDesigns: {
    type: Number,

    default: 0,
  },
  noOfOrders: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("category", categorySchema);
