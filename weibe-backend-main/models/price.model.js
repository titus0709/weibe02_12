const mongoose = require("mongoose");

const priceSchema = new mongoose.Schema({
  designCount: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("price", priceSchema);
